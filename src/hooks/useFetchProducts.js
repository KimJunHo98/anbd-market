import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDocs, query, collection, orderBy, where, doc, getDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase";

const useFetchProducts = () => {
    const { category, id, value } = useParams();
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState("");
    const [subCategoryItems, setSubCategoryItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate("");

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

                if (productsData) {
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
                    // 특정 카테고리에 속하는 제품들을 가져오기 위한 Firestore 쿼리
                    const categoryCollectionRef = query(collection(firestore, "product"), where("category", "==", category));
                    const querySnapshot = await getDocs(categoryCollectionRef);

                    const categoryProducts = querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));

                    if (categoryProducts) {
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
                    // 특정 서브카테고리에 속하는 제품들을 가져오기 위한 Firestore 쿼리
                    const subCategoryCollectionRef = query(collection(firestore, "product"), where("subCategory", "==", value));
                    const querySnapshot = await getDocs(subCategoryCollectionRef);

                    const subCategoryProducts = querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));

                    if (subCategoryProducts) {
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
            });

            alert("구매 완료");
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    // 최신순으로 정렬
    const compareProductsByDate = (recentA, recentB) => new Date(recentB.createdAt) - new Date(recentA.createdAt);

    // 카테고리별 필터링
    const filteredBestCategory = products.filter((result) => result.category === "best").sort(compareProductsByDate);
    const filteredFreeCategory = products.filter((result) => result.category === "free").sort(compareProductsByDate);
    const filteredExchangeCategory = products.filter((result) => result.category === "exchange").sort(compareProductsByDate);
    const filteredReuseCategory = products.filter((result) => result.category === "reuse").sort(compareProductsByDate);

    return {
        products,
        product,
        loading,
        subCategoryItems,
        filteredBestCategory,
        filteredFreeCategory,
        filteredExchangeCategory,
        filteredReuseCategory,
        handleBuyBtnClick,
    };
};

export default useFetchProducts;
