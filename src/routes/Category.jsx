import React from "react";
import { useParams } from "react-router-dom";
import { useSearchContext } from "../context/useSearchContext";
import useFetchProducts from "../hooks/useFetchProducts";

import { Container, Div, H2, Inner, Section, ALink, Li, Ul, Article, Img, P } from "../styledComponents";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

const Category = () => {
    const { category } = useParams();
    const { products, loading } = useFetchProducts();
    const { search } = useSearchContext();

    const productsCategory = products.filter(
        (result) =>
            (result.category === category && result.title.toLowerCase().includes(search.toLowerCase())) ||
            result.brand.toLowerCase().includes(search.toLowerCase())
    );

    const formatNumberWithCommas = (number) => {
        if (number === null || number === undefined) {
            return "N/A";
        }
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <Section id="category">
            <H2 className="blind">카테고리 제품 페이지</H2>
            <Container>
                <Inner>
                    <Div className="category">
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
                                                    {product.imageUrl && <Img src={product.imageUrl[0]} alt={product.title} />}
                                                </Div>
                                                <Div className="category_text">
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
                                                                ? " 베스트/"
                                                                : product.category === "exchange"
                                                                ? " 교환/"
                                                                : product.category === "free"
                                                                ? " 나눔/"
                                                                : product.category === "reuse"
                                                                ? " 재사용/"
                                                                : ""}
                                                            {product.subCategoryText}
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
        </Section>
    );
};

export default Category;
