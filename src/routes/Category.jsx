import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import { Container, Div, H2, Inner, Section, ALink, Li, Ul, Article, Img, P } from "../styledComponents";

dayjs.extend(relativeTime);
dayjs.locale("ko");

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

                if (categoryProducts) {
                    setProducts(categoryProducts);
                } else {
                    console.log("제품이 존재하지 않습니다.");
                }
            } catch (err) {
                console.error(err);
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
                            <Div className="loading">
                                <P>로딩 중...</P>
                            </Div>
                        ) : (
                            <>
                                {products.length < 1 ? (
                                    <P>등록된 상품이 없습니다.</P>
                                ) : (
                                    <>
                                        {products.length === 0 ? (
                                            <P>등록된 상품이 없습니다.</P>
                                        ) : (
                                            <>
                                                {products.map((product) => (
                                                    <Article className="category_list" key={product.id}>
                                                        <ALink to={`/product/detail/${product.id}`} className="category_item">
                                                            <Div className="category_image">
                                                                <Img src={product.imageUrl} alt={product.title} />
                                                            </Div>
                                                            <Div className="category_text">
                                                                <Ul className="col_text">
                                                                    <Li className="title">{product.title}</Li>
                                                                    <Li className="price">{product.price}원</Li>
                                                                </Ul>
                                                                <Ul className="row_text">
                                                                    {product.brand === "" ? null : (
                                                                        <Li className="brand">{product.brand}</Li>
                                                                    )}
                                                                    <Li className="size">{product.size}</Li>
                                                                </Ul>
                                                                <P className="time">{dayjs(product.createdAt).fromNow()}</P>
                                                            </Div>
                                                        </ALink>
                                                    </Article>
                                                ))}
                                            </>
                                        )}
                                        {/* {products.map((product) => (
                                            <Article className="category_list" key={product.id}>
                                                <ALink to={`/product/detail/${product.id}`} className="category_item">
                                                    <Div className="category_image">
                                                        <Img src={product.imageUrl} alt={product.title} />
                                                    </Div>
                                                    <Ul className="category_text">
                                                        <Li className="title">{product.title}</Li>
                                                        <Li className="price">{product.price} 원</Li>
                                                        <Li className="brand">{product.brand}</Li>
                                                        <Li className="size">{product.size}</Li>
                                                        <Li className="time">{dayjs(product.createdAt).fromNow()}</Li>
                                                    </Ul>
                                                </ALink>
                                            </Article>
                                        ))} */}
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

export default Category;
