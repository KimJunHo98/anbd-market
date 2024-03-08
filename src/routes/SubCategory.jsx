import React from "react";
import { useParams } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProducts";

import { ALink, Article, Container, Div, H2, Img, Inner, Li, P, Section, Ul } from "../styledComponents";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import { useSearchContext } from "../context/useSearchContext";

dayjs.extend(relativeTime);
dayjs.locale("ko");

const SubCategory = () => {
    const { value } = useParams();
    const { loading, subCategoryItems } = useFetchProducts();
    const { search } = useSearchContext();

    const searchProducts = subCategoryItems.filter(
        (result) =>
            (result.subCategory === value && result.title.toLowerCase().includes(search.toLowerCase())) ||
            result.brand.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Section id="subCategory">
            <H2 className="blind">서브 카테고리 페이지</H2>
            <Container>
                <Inner>
                    <Div className="sub_category">
                        {loading ? (
                            <Div className="loading">
                                <P>로딩 중...</P>
                            </Div>
                        ) : (
                            <>
                                {subCategoryItems.length === 0 ? (
                                    <P className="not_have">등록된 상품이 없습니다.</P>
                                ) : searchProducts.length > 0 ? (
                                    searchProducts.map((item) => (
                                        <Article className="sub_category_item_wrap" key={item.id}>
                                            <ALink to={`/product/detail/${item.id}`} className="sub_category_item">
                                                <Div className="sub_category_image">
                                                {item.imageUrl && <Img src={item.imageUrl[0]} alt={item.title} />}
                                                </Div>
                                                <Div className="sub_category_text">
                                                    <Ul className="col_text">
                                                        <Li className="title">{item.title}</Li>
                                                        <Li className="price">{item.price}원</Li>
                                                    </Ul>
                                                    <Ul className="row_text">
                                                        {item.brand === "" ? null : <Li className="brand">{item.brand}</Li>}
                                                        <Li className="size">{item.size}</Li>
                                                    </Ul>
                                                    <Ul className="row_text">
                                                        <Li className="time">{dayjs(item.createdAt).fromNow()}</Li>
                                                        <Li className="state">
                                                            {item.category === "best"
                                                                ? "베스트>"
                                                                : item.category === "exchange"
                                                                ? "교환>"
                                                                : item.category === "free"
                                                                ? "나눔>"
                                                                : item.category === "reuse"
                                                                ? "재사용>"
                                                                : ""}
                                                                {item.subCategoryText}
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
        </Section>
    );
};

export default SubCategory;
