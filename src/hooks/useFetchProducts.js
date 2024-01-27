import { useState, useEffect } from "react";
import { getDocs, query, collection, orderBy, where, doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import { useParams } from "react-router-dom";

const useFetchProducts = () => {
    const { category, id } = useParams();
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState("");
    const [loading, setLoading] = useState(true);

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
                    const q = query(collection(firestore, "product"), where("category", "==", category));
                    const querySnapshot = await getDocs(q);

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

    return { products, product, loading };
};

export default useFetchProducts;
