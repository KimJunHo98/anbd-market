import React from "react";
import useFetchProducts from "../hooks/useFetchProducts";
import { useSearchContext } from "../context/useSearchContext";

import { Div, ALink, H2, Article, Ul, Li, Img, P, Container, Inner } from "../styledComponents";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

const Product = () => {
    const { loading, products } = useFetchProducts();
    const { search } = useSearchContext();

    const productsCategory = products.filter(
        (result) =>
            (result && result.brand.toLowerCase().includes(search.toLowerCase())) ||
            result.title.toLowerCase().includes(search.toLowerCase()) ||
            result.desc.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Article id="product">
            <Container>
                <Inner>
                    <H2 className="blind">상품 페이지</H2>
                    <Div className="product">
                        {loading ? (
                            <Div className="loading">
                                <P>로딩 중...</P>
                            </Div>
                        ) : (
                            <>
                                {products.length === 0 ? (
                                    <P className="not_have">등록된 상품이 없습니다.</P>
                                ) : productsCategory.length > 0 ? (
                                    productsCategory.map((product) => (
                                        <Article className="category_item_wrap" key={product.id}>
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
                                                        {product.brand === "" ? null : <Li className="brand">{product.brand}</Li>}
                                                        <Li className="size">{product.size}</Li>
                                                    </Ul>
                                                    <Ul className="row_text">
                                                        <Li className="time">{dayjs(product.createdAt).fromNow()}</Li>
                                                        <Li className="state">
                                                            {product.category === "best"
                                                                ? "/ 베스트"
                                                                : product.category === "exchange"
                                                                ? "/ 교환"
                                                                : product.category === "free"
                                                                ? "/ 나눔"
                                                                : product.category === "reuse"
                                                                ? "/ 재사용"
                                                                : ""}
                                                        </Li>
                                                    </Ul>
                                                </Div>
                                            </ALink>
                                        </Article>
                                    ))
                                ) : (
                                    productsCategory.length === 0 && <P className="not_have">검색하신 상품이 없습니다.</P>
                                )}
                            </>
                        )}
                    </Div>
                </Inner>
            </Container>
        </Article>
    );
};

export default Product;
