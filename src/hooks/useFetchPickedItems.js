import { useEffect, useState } from "react";
import { useStateContext } from "../context/useStateContext";
import useFetchProducts from "./useFetchProducts";
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, setDoc } from "firebase/firestore";
import { firestore } from "../firebase";

const useFetchPickedItems = () => {
    const { useObj } = useStateContext();
    const { product } = useFetchProducts();
    const [loading, setLoading] = useState(false);
    const [pickedItems, setPickedItems] = useState([]);

    const handleAddLike = async () => {
        try {
            setLoading(true);

            // picked: true 를 state로 관리해서 불리언값 토글형식으로 바꿔야함
            const docRef = await addDoc(collection(firestore, "picked"), {
                picked: true, 
                title: product.title,
                username: useObj.displayName,
                pickedId: useObj.uid, // 사용자가 찜한 상품
                useId: product.useId, // product의 데이터
            });
            const newDocId = docRef.id;

            await setDoc(doc(collection(firestore, "picked"), newDocId), { id: newDocId }, { merge: true });
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleRemoveLike = async () => {
        try {
            const querySnapshot = await getDocs(collection(firestore, "picked"));
            const pickedDocs = querySnapshot.docs.filter(
                (doc) => doc.data().PickedId === product.useId && doc.data().picked === true && doc.data().title === product.title
            );

            if (pickedDocs.length > 0) {
                const pickedDocId = pickedDocs[0].id;
                await deleteDoc(doc(collection(firestore, "picked"), pickedDocId));
            }
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
                (pick) => pick.PickedId === product.useId && pick.picked === true && pick.title === product.title
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
            } finally {
                setLoading(false);
            };
        });

        return () => fetchPickedData();
    }, []);

    return { handleToggleLike, loading, pickedItems };
};

export default useFetchPickedItems;
