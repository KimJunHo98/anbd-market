import { useEffect, useState, useCallback, useMemo } from "react";
import { useStateContext } from "../context/useStateContext";
import useFetchProducts from "./useFetchProducts";
import { collection, deleteDoc, doc, getDocs, onSnapshot, query, setDoc, where } from "firebase/firestore";
import { firestore } from "../firebase";

const useFetchPickedItems = () => {
    const { useObj } = useStateContext();
    const { product } = useFetchProducts();
    const [loading, setLoading] = useState(false);
    const [pickedItems, setPickedItems] = useState([]);
    const [pickedCount, setPickedCount] = useState([]);
    const currentUser = useObj.displayName;

    // 찜하기 함수
    const handleAddLike = useCallback(async () => {
        try {
            setLoading(true);

            // 이미 찜목록에 있는지 확인
            const isLiked = pickedItems.some(
                (pick) => pick.id === product.id && pick.picked === true && pick.title === product.title && pick.username === currentUser
            );

            // 찜목록에 없으면 추가
            if (!isLiked) {
                const pickedDocRef = doc(collection(firestore, "picked"), `${product.id}_${currentUser}`);
                await setDoc(
                    pickedDocRef,
                    {
                        picked: true,
                        title: product.title,
                        price: product.price,
                        brand: product.brand,
                        size: product.size,
                        category: product.category,
                        subCategory: product.subCategory,
                        subCategoryText: product.subCategoryText,
                        imgUrl: product.imageUrl,
                        username: currentUser,
                        useId: product.useId, // product의 데이터
                        id: product.id,
                        count: 1,
                    },
                    { merge: true }
                );
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [pickedItems, product, currentUser]);

    // 찜하기 취소 함수
    const handleRemoveLike = useCallback(async () => {
        try {
            // 찜목록을 가져오는 쿼리
            const pickedQuery = query(
                collection(firestore, "picked"),
                where("id", "==", product.id),
                where("picked", "==", true),
                where("title", "==", product.title),
                where("username", "==", currentUser)
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
    }, [product, currentUser]);

    // 찜하기 기능 토글 함수
    const handleToggleLike = useCallback(async () => {
        try {
            setLoading(true);

            // 이미 찜목록에 있는지 확인
            const isLiked = pickedItems.some(
                (pick) => pick.id === product.id && pick.picked === true && pick.title === product.title && pick.username === currentUser
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
    }, [pickedItems, product, currentUser, handleAddLike, handleRemoveLike]);

    // 찜목록 실시간 업데이트
    useEffect(() => {
        const fetchPickedData = onSnapshot(query(collection(firestore, "picked"), where("username", "==", currentUser)), (snapshot) => {
            try {
                const pickedData = snapshot.docs.map((doc) => doc.data());
                setPickedItems(pickedData);
            } catch (err) {
                console.error(err);
            }
        });

        return () => fetchPickedData();
    }, [currentUser]);

    // 전체 찜카운트 실시간 업데이트
    useEffect(() => {
        const fetchPickedCountData = onSnapshot(collection(firestore, "picked"), (snapshot) => {
            try {
                const pickedCountData = snapshot.docs.map((doc) => doc.data());
                setPickedCount(pickedCountData);
            } catch (err) {
                console.error(err);
            }
        });

        return () => fetchPickedCountData();
    }, []);

    // 현재 제품에 대한 필터링된 찜한 항목
    const filteredPickeditem = useMemo(() => 
        pickedItems.filter((pick) => pick.title === product.title && pick.id === product.id && pick.picked === true),
        [pickedItems, product]
    );

    // 전체 찜 카운트에서 필터링된 항목
    const filteredPickedCount = useMemo(() => 
        pickedCount.filter((pick) => pick.title === product.title && pick.picked === true),
        [pickedCount, product]
    );

    return { handleToggleLike, loading, filteredPickeditem, filteredPickedCount, pickedItems };
};

export default useFetchPickedItems;
