import React, { useMemo } from "react";
import { useSearchContext } from "../context/useSearchContext";
import useFetchProducts from "../hooks/useFetchProducts";

import { Div, ALink, H2, Article, Ul, Li, Img, P, Container, Inner } from "../styledComponents";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

const Product = () => {
    const { loading, products, formatNumberWithCommas } = useFetchProducts();
    const { search } = useSearchContext();

    const searchProducts = useMemo(() => {
        return products.filter(
            (result) =>
                (result && result.brand.toLowerCase().includes(search.toLowerCase())) ||
                result.title.toLowerCase().includes(search.toLowerCase()) ||
                result.desc.toLowerCase().includes(search.toLowerCase())
        );
    }, [products, search]);

    return (
        <Article id="product">
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
                                    <P className="not_have">등록된 상품이 없습니다.</P>
                                ) : searchProducts.length > 0 ? (
                                    searchProducts.map((product) => (
                                        <Article className="product_item_wrap" key={product.id}>
                                            <ALink to={`/product/detail/${product.id}`} className="product_item">
                                                <Div className="product_image">
                                                    {product.imageUrl && <Img src={product.imageUrl[0]} alt={product.title} />}
                                                </Div>
                                                <Div className="product_text">
                                                    <Ul className="col_text">
                                                        <Li className="title">{product.title}</Li>
                                                        <Li className="price">{formatNumberWithCommas(product.price)}원</Li>
                                                    </Ul>
                                                    <Ul className="row_text">
                                                        {product.brand === "" ? null : <Li className="brand">{product.brand}</Li>}
                                                        <Li className="size">{product.size}</Li>
                                                        {product.soldOut && <Li className="soldout">거래 완료</Li>}
                                                    </Ul>
                                                    <Ul className="row_text">
                                                        <Li className="time">{dayjs(product.createdAt).fromNow()}</Li>
                                                        <Li className="state">
                                                            {product.category === "best"
                                                                ? " 베스트>"
                                                                : product.category === "exchange"
                                                                ? " 교환>"
                                                                : product.category === "free"
                                                                ? " 나눔>"
                                                                : product.category === "reuse"
                                                                ? " 재사용>"
                                                                : ""}
                                                            {product.subCategoryText}
                                                        </Li>
                                                    </Ul>
                                                </Div>
                                            </ALink>
                                        </Article>
                                    ))
                                ) : (
                                    searchProducts.length === 0 && <P className="not_have">검색하신 상품이 없습니다.</P>
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
