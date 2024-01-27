import React from "react";
import useFetchProducts from "../hooks/useFetchProducts";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import { Container, Div, Inner, Section, ALink, H2, Article, Ul, Li, Img, P } from "../styledComponents";

dayjs.extend(relativeTime);
dayjs.locale("ko");

const Product = () => {
    const { products, loading } = useFetchProducts();
    // console.log(products);

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
