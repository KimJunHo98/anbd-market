import { useEffect, useState } from "react";
import { useStateContext } from "../context/useStateContext";
import useFetchProducts from "./useFetchProducts";
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, setDoc, where } from "firebase/firestore";
import { firestore } from "../firebase";

const useFetchPickedItems = () => {
    const { useObj } = useStateContext();
    const { product } = useFetchProducts();
    const [loading, setLoading] = useState(false);
    const [pickedItems, setPickedItems] = useState([]);

    const handleAddLike = async () => {
        try {
            setLoading(true);

            let newDocId;

            const isLiked = pickedItems.some(
                (pick) => pick.pickedId === product.useId && pick.picked === true && pick.title === product.title
            );

            if (!isLiked) {
                const docRef = await addDoc(collection(firestore, "picked"), {
                    picked: true,
                    title: product.title,
                    price: product.price,
                    brand: product.brand,
                    size: product.size,
                    category: product.category,
                    subCategory: product.subCategory,
                    subCategoryText: product.subCategoryText,
                    imgUrl: product.imageUrl,
                    username: useObj.displayName,
                    pickedId: useObj.uid, // 사용자가 찜한 상품
                    useId: product.useId, // product의 데이터
                    count: 1,
                });

                newDocId = docRef.id;
            }

            await setDoc(doc(collection(firestore, "picked"), newDocId), { id: newDocId }, { merge: true });
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleRemoveLike = async () => {
        try {
            const pickedQuery = query(
                collection(firestore, "picked"),
                where("pickedId", "==", product.useId),
                where("picked", "==", true),
                where("title", "==", product.title)
            );

            const querySnapshot = await getDocs(pickedQuery);

            querySnapshot.forEach(async (doc) => {
                await deleteDoc(doc.ref);
            });
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleToggleLike = async () => {
        try {
            setLoading(true);

            const isLiked = pickedItems.some(
                (pick) => pick.pickedId === product.useId && pick.picked === true && pick.title === product.title
            );

            if (isLiked) {
                // 이미 찜한 상태면 제거
                await handleRemoveLike();
            } else {
                // 찜하지 않은 상태면 추가
                await handleAddLike();
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchPickedData = onSnapshot(collection(firestore, "picked"), (snapshot) => {
            try {
                const pickedData = snapshot.docs.map((doc) => doc.data());

                if (pickedData) {
                    setPickedItems(pickedData);
                } else {
                    console.log("제품이 존재하지 않습니다.");
                }
            } catch (err) {
                console.error(err);
            }
        });

        return () => fetchPickedData();
    }, [product]);

    const filteredPickeditem = pickedItems.filter(
        (pick) => pick.title === product.title && pick.pickedId === product.useId && pick.picked === true
    );

    return { handleToggleLike, loading, filteredPickeditem, pickedItems };
};

export default useFetchPickedItems;
