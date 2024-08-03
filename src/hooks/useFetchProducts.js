import { useState, useEffect, useMemo, useCallback } from "react";
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
    const navigate = useNavigate();
    const currentUser = useObj.displayName;

    const fetchProducts = useCallback(async () => {
        try {
            const productCollectionRef = query(collection(firestore, "product"), orderBy("createdAt", "desc"));
            const productQuerySnapshot = await getDocs(productCollectionRef);

            const productsData = productQuerySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setProducts(productsData);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, []);

    const fetchCategoryProducts = useCallback(async () => {
        try {
            if (category) {
                const categoryCollectionRef = query(collection(firestore, "product"), where("category", "==", category));
                const querySnapshot = await getDocs(categoryCollectionRef);

                const categoryProducts = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setProducts(categoryProducts);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [category]);

    const fetchSubCategoryProducts = useCallback(async () => {
        try {
            if (value) {
                const subCategoryCollectionRef = query(collection(firestore, "product"), where("subCategory", "==", value));
                const querySnapshot = await getDocs(subCategoryCollectionRef);

                const subCategoryProducts = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setSubCategoryItems(subCategoryProducts);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [value]);

    const fetchProductDetail = useCallback(async () => {
        try {
            if (id) {
                const productDocRef = doc(firestore, "product", id);
                const productDocSnapshot = await getDoc(productDocRef);

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
    }, [id]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    useEffect(() => {
        fetchCategoryProducts();
    }, [category, fetchCategoryProducts]);

    useEffect(() => {
        fetchSubCategoryProducts();
    }, [value, fetchSubCategoryProducts]);

    useEffect(() => {
        fetchProductDetail();
    }, [id, fetchProductDetail]);

    const handleBuyBtnClick = useCallback(async () => {
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
    }, [id, currentUser, navigate]);

    const formatNumberWithCommas = useCallback((number) => {
        if (number === null || number === undefined) {
            return "N/A";
        }
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }, []);

    const compareProductsByDate = useCallback((recentA, recentB) => new Date(recentB.createdAt) - new Date(recentA.createdAt), []);

    const filteredBestCategory = useMemo(() => products.filter((result) => result.category === "best").sort(compareProductsByDate), [products, compareProductsByDate]);
    const filteredFreeCategory = useMemo(() => products.filter((result) => result.category === "free").sort(compareProductsByDate), [products, compareProductsByDate]);
    const filteredExchangeCategory = useMemo(() => products.filter((result) => result.category === "exchange").sort(compareProductsByDate), [products, compareProductsByDate]);
    const filteredReuseCategory = useMemo(() => products.filter((result) => result.category === "reuse").sort(compareProductsByDate), [products, compareProductsByDate]);

    const filteredPurchase = useMemo(() => products
        .filter((result) => result.soldOut === true && result.buyer === currentUser)
        .sort(compareProductsByDate), [products, currentUser, compareProductsByDate]);

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