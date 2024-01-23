import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";
import { Container, Div, H2, Inner, Section, ALink, Li, Ul, Article } from "../styledComponents";

const Category = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategoryProducts = async () => {
            try {
                // 특정 카테고리에 속하는 제품들을 가져오기 위한 Firestore 쿼리
                const q = query(collection(firestore, "product"), where("category", "==", category));
                const querySnapshot = await getDocs(q);

                const categoryProducts = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setProducts(categoryProducts);
            } catch (error) {
                console.error("데이터를 가져오는 중 오류 발생:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategoryProducts();
    }, [category]);

    return (
        <Section id="category">
            <H2 className="blind">카테고리 제품 목록</H2>
            <Container>
                <Inner>
                    <Div className="category">
                        {loading ? (
                            <p>로딩 중...</p>
                        ) : (
                            <>
                                {products.map((product) => (
                                    <Article className="category_lists" key={product.id}>
                                        <ALink to={`/product/detail/${product.id}`}>
                                            <Ul>
                                                <Li>{product.text}</Li>
                                                <Li>가격: {product.price}</Li>
                                                <Li>브랜드: {product.brand}</Li>
                                                <Li>사이즈: {product.size}</Li>
                                                <Li>상품설명 : {product.desc}</Li>
                                            </Ul>
                                        </ALink>
                                    </Article>
                                ))}
                            </>
                        )}
                    </Div>
                </Inner>
            </Container>
        </Section>
    );
};

export default Category;
