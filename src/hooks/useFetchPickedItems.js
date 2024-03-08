import { useEffect, useState } from "react";
import { useStateContext } from "../context/useStateContext";
import useFetchProducts from "./useFetchProducts";
import { collection, deleteDoc, doc, getDocs, onSnapshot, query, setDoc, where } from "firebase/firestore";
import { firestore } from "../firebase";

const useFetchPickedItems = () => {
    const { useObj } = useStateContext();
    const { product } = useFetchProducts();
    const [loading, setLoading] = useState(false);
    const [pickedItems, setPickedItems] = useState([]);

    // 찜하기 함수
    const handleAddLike = async () => {
        try {
            setLoading(true);

            // 이미 찜목록에 있는지 확인
            const isLiked = pickedItems.some((pick) => pick.id === product.id && pick.picked === true && pick.title === product.title);

            // 찜목록에 없으면 추가
            if (!isLiked) {
                const pickedDocRef = doc(collection(firestore, "picked"), product.id);
                await setDoc(pickedDocRef, {
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
                    useId: product.useId, // product의 데이터
                    id: product.id,
                    count: 1,
                }, { merge: true });
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // 찜하기 취소 함수
    const handleRemoveLike = async () => {
        try {
            // 찜목록을 가져오는 쿼리
            const pickedQuery = query(
                collection(firestore, "picked"),
                where("id", "==", product.id),
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

    // 찜하기 기능 토글 함수
    const handleToggleLike = async () => {
        try {
            setLoading(true);

            // 이미 찜목록에 있는지 확인
            const isLiked = pickedItems.some((pick) => pick.id === product.id && pick.picked === true && pick.title === product.title);

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
        // onSnapshot 메소드를 사용하여 실시간 업데이트를 감지하고 찜한 데이터를 가져옴
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

    // 현재 제품에 대한 필터링된 찜한 항목을 가져옴
    const filteredPickeditem = pickedItems.filter(
        (pick) => pick.title === product.title && pick.id === product.id && pick.picked === true
    );

    return { handleToggleLike, loading, filteredPickeditem, pickedItems };
};

export default useFetchPickedItems;
