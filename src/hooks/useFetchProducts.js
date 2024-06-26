import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStateContext } from "../context/useStateContext";
import { getDocs, query, collection, orderBy, where, doc, getDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase";

const useFetchProducts = () => {
    const { useObj } = useStateContext();
    const { category, id, value } = useParams();
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState("");
    const [subCategoryItems, setSubCategoryItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate("");
    const currentUser = useObj.displayName;

    // product
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productCollectionRef = query(collection(firestore, "product"), orderBy("createdAt", "desc"));
                const productQuerySnapshot = await getDocs(productCollectionRef);

                const productsData = productQuerySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                if (productsData.length > 0) {
                    setProducts(productsData);
                } else {
                    console.log("제품이 존재하지 않습니다.");
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // category
    useEffect(() => {
        const fetchCategoryProducts = async () => {
            try {
                if (category) {
                    const categoryCollectionRef = query(collection(firestore, "product"), where("category", "==", category));
                    const querySnapshot = await getDocs(categoryCollectionRef);

                    const categoryProducts = querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));

                    if (categoryProducts.length > 0) {
                        setProducts(categoryProducts);
                    } else {
                        console.log("제품이 존재하지 않습니다.");
                    }
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCategoryProducts();
    }, [category]);

    // subCategory
    useEffect(() => {
        const fetchSubCategoryProducts = async () => {
            try {
                if (value) {
                    const subCategoryCollectionRef = query(collection(firestore, "product"), where("subCategory", "==", value));
                    const querySnapshot = await getDocs(subCategoryCollectionRef);

                    const subCategoryProducts = querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));

                    if (subCategoryProducts.length > 0) {
                        setSubCategoryItems(subCategoryProducts);
                    } else {
                        console.log("제품이 존재하지 않습니다.");
                    }
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchSubCategoryProducts();
    }, [value]);

    // detail
    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                if (id) {
                    const productDocRef = doc(firestore, "product", id);
                    const productDocSnapshot = await getDoc(productDocRef);

                    // 해당 데이터의 존재여부 확인
                    if (productDocSnapshot.exists()) {
                        setProduct(productDocSnapshot.data());
                    } else {
                        console.log("해당 제품이 존재하지 않습니다.");
                    }
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetail();
    }, [id]);

    // 구매처리 함수
    const handleBuyBtnClick = async () => {
        try {
            const productDocRef = doc(firestore, "product", id);
            const productDocSnapshot = await getDoc(productDocRef);

            if (!productDocSnapshot.exists()) {
                console.log("해당 제품이 존재하지 않습니다.");

                return;
            }

            await updateDoc(productDocRef, {
                soldOut: true,
                buyer: currentUser,
            });

            alert("구매 완료");
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    // 숫자에 쉼표 추가하는 함수
    const formatNumberWithCommas = (number) => {
        if (number === null || number === undefined) {
            return "N/A";
        }
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    // 최신순으로 정렬
    const compareProductsByDate = (recentA, recentB) => new Date(recentB.createdAt) - new Date(recentA.createdAt);

    // 카테고리별 필터링
    const filteredBestCategory = products.filter((result) => result.category === "best").sort(compareProductsByDate);
    const filteredFreeCategory = products.filter((result) => result.category === "free").sort(compareProductsByDate);
    const filteredExchangeCategory = products.filter((result) => result.category === "exchange").sort(compareProductsByDate);
    const filteredReuseCategory = products.filter((result) => result.category === "reuse").sort(compareProductsByDate);
    
    // 구매 상품 필터링(구매 유저 정보)
    const filteredPurchase = products
        .filter((result) => result.soldOut === true && result.buyer === currentUser) // 현재 유저의 구매 상품 필터링
        .sort(compareProductsByDate);

    return {
        products,
        product,
        loading,
        setLoading,
        subCategoryItems,
        filteredBestCategory,
        filteredFreeCategory,
        filteredExchangeCategory,
        filteredReuseCategory,
        filteredPurchase,
        formatNumberWithCommas,
        handleBuyBtnClick,
    };
};

export default useFetchProducts;
