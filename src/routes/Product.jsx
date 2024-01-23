import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { firestore } from "../firebase";

import { Container, Div, Inner, Section, ALink, H2, Article, Ul, Li } from "../styledComponents";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productCollectionRef = collection(firestore, "product");
                const productQuerySnapshot = await getDocs(productCollectionRef);

                const productsData = productQuerySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setProducts(productsData);
            } catch (error) {
                console.error("데이터를 가져오는 중 오류 발생:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <Section id="product">
            <H2 className="blind">상품 페이지</H2>
            <Container>
                <Inner>
                    <Div className="product">
                        {loading ? (
                            <p>로딩 중...</p>
                        ) : (
                            <>
                                {products.map((product) => (
                                    <Article className="product_lists" key={product.id}>
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

export default Product;
