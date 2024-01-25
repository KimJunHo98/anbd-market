import React, { useEffect, useState } from "react";
import { getDocs, collection, orderBy, query } from "firebase/firestore";
import { firestore } from "../firebase";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import { Container, Div, Inner, Section, ALink, H2, Article, Ul, Li, Img, P } from "../styledComponents";

dayjs.extend(relativeTime);
dayjs.locale("ko");

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

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

    console.log(products);

    return (
        <Section id="product">
            <H2 className="blind">상품 페이지</H2>
            <Container>
                <Inner>
                    <Div className="product">
                        {loading ? (
                            <Div className="loading">
                                <P>로딩 중...</P>
                            </Div>
                        ) : (
                            <>
                                {products.length === 0 ? (
                                    <P>등록된 상품이 없습니다.</P>
                                ) : (
                                    <>
                                        {products.map((product) => (
                                            <Article className="product_list" key={product.id}>
                                                <ALink to={`/product/detail/${product.id}`} className="product_item">
                                                    <Div className="product_image">
                                                        <Img src={product.imageUrl} alt={product.title} />
                                                    </Div>
                                                    <Div className="product_text">
                                                        <Ul className="col_text">
                                                            <Li className="title">{product.title}</Li>
                                                            <Li className="price">{product.price}원</Li>
                                                        </Ul>
                                                        <Ul className="row_text">
                                                            {product.brand === "" ? null : <Li className="brand">{product.brand}</Li>}
                                                            <Li className="size">{product.size}</Li>
                                                        </Ul>
                                                        <P className="time">{dayjs(product.createdAt).fromNow()}</P>
                                                    </Div>
                                                </ALink>
                                            </Article>
                                        ))}
                                    </>
                                )}
                            </>
                        )}
                    </Div>
                </Inner>
            </Container>
        </Section>
    );
};

export default Product;
