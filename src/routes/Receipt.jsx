import React from "react";
import useFetchProducts from "../hooks/useFetchProducts";

import { ALink, Article, Container, Div, H2, H3, Img, Inner, Li, P, Section, Ul } from "../styledComponents";
import { useStateContext } from "../context/useStateContext";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

const Receipt = () => {
    const { useObj } = useStateContext();
    const { loading, products } = useFetchProducts();

    const filteredMySoldItem = products.filter((item) => (item && item.useId === useObj.uid) || item.username === useObj.displayName);

    const formatNumberWithCommas = (number) => {
        if (number === null || number === undefined) {
            return "N/A";
        }
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <Section id="receipt">
            <H2 className="blind">구매내역</H2>
            <Container>
                <Inner>
                    <Div className="receipt">
                        {loading ? (
                            <Div className="loading">
                                <P>로딩 중...</P>
                            </Div>
                        ) : (
                            <>
                                {filteredMySoldItem === 0 ? (
                                    <P className="not_have">판매한 상품이 없습니다.</P>
                                ) : (
                                    <>
                                        <H3 className="receipt_title">나의 판매내역</H3>
                                        {filteredMySoldItem.map(
                                            (sold) =>
                                                sold.soldOut && (
                                                    <Article className="receipt_item_wrap" key={sold.id}>
                                                        <ALink to={`/product/detail/${sold.id}`} className="receipt_item">
                                                            <Div className="receipt_image">
                                                                {sold.imageUrl && <Img src={sold.imageUrl[0]} alt={sold.title} />}
                                                            </Div>
                                                            <Div className="receipt_text">
                                                                <Ul className="col_text">
                                                                    <Li className="title">{sold.title}</Li>
                                                                    <Li className="price">{formatNumberWithCommas(sold.price)}원</Li>
                                                                </Ul>
                                                                <Ul className="row_text">
                                                                    {sold.brand === "" ? null : <Li className="brand">{sold.brand}</Li>}
                                                                    <Li className="size">{sold.size}</Li>
                                                                    {sold.soldOut && <Li className="soldout">거래 완료</Li>}
                                                                    
                                                                </Ul>
                                                                <Ul className="row_text">
                                                                    <Li className="time">{dayjs(sold.createdAt).fromNow()}</Li>
                                                                    <Li className="state">
                                                                        {sold.category === "best"
                                                                            ? " 베스트>"
                                                                            : sold.category === "exchange"
                                                                            ? " 교환>"
                                                                            : sold.category === "free"
                                                                            ? " 나눔>"
                                                                            : sold.category === "reuse"
                                                                            ? " 재사용>"
                                                                            : ""}
                                                                        {sold.subCategoryText}
                                                                    </Li>
                                                                </Ul>
                                                            </Div>
                                                        </ALink>
                                                    </Article>
                                                )
                                        )}
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

export default Receipt;
