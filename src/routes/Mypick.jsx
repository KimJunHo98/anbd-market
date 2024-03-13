import React from "react";
import { useStateContext } from "../context/useStateContext";
import useFetchPickedItems from "../hooks/useFetchPickedItems";
import useFetchProducts from "../hooks/useFetchProducts";

import Login from "./Login";

import { ALink, Article, Container, Div, Figcaption, Figure, H2, H3, Img, Inner, Li, Loading, NotHave, P, Section, Ul } from "../styledComponents";
import { IoMdHeartEmpty } from "react-icons/io";

const Mypick = () => {
    const { isLogIn } = useStateContext();
    const { loading, pickedItems } = useFetchPickedItems();
    const { formatNumberWithCommas } = useFetchProducts();

    return (
        <>
            {isLogIn ? (
                <Section id="myPick">
                    <H2 className="blind">찜목록</H2>
                    <Container>
                        <Inner>
                            <Div className="my_pick">
                                {loading ? (
                                    <Loading role="status" aria-live="assertive">
                                        <P>로딩 중...</P>
                                    </Loading>
                                ) : (
                                    <>
                                        {!pickedItems ? (
                                            <NotHave role="status" aria-live="assertive">
                                                찜한 상품이 없습니다.
                                            </NotHave>
                                        ) : (
                                            <>
                                                <H3 className="pick_title">내가 찜한 상품</H3>
                                                {pickedItems.map((pick) => (
                                                    <Article key={pick.id} className="pick_list">
                                                        <ALink
                                                            to={`/product/detail/${pick.id}`}
                                                            className="pick_item"
                                                            role="link"
                                                            aria-label="상품 상세페이지로 이동"
                                                        >
                                                            <Figure className="pick_image">
                                                                {pick.imgUrl && <Img src={pick.imgUrl[0]} alt={pick.title} />}
                                                                <Figcaption className="blind">{pick.title}</Figcaption>
                                                            </Figure>
                                                            <Div className="pick_text">
                                                                <Ul className="col_text">
                                                                    <Li className="title">{pick.title}</Li>
                                                                    <Li className="price">{formatNumberWithCommas(pick.price)}원</Li>
                                                                </Ul>
                                                                <Ul className="row_text">
                                                                    {pick.brand === "" ? null : <Li className="brand">{pick.brand}</Li>}
                                                                    <Li className="size">{pick.size}</Li>
                                                                    {pick.soldOut && <Li className="soldout">거래 완료</Li>}
                                                                </Ul>
                                                                <P className="state">
                                                                    {pick.category === "best"
                                                                        ? " 베스트>"
                                                                        : pick.category === "exchange"
                                                                        ? " 교환>"
                                                                        : pick.category === "free"
                                                                        ? " 나눔>"
                                                                        : pick.category === "reuse"
                                                                        ? " 재사용>"
                                                                        : ""}
                                                                    {pick.subCategoryText}
                                                                </P>
                                                            </Div>
                                                            <P className="pick_count">
                                                                <IoMdHeartEmpty aria-hidden="true" />
                                                                {pick.count}
                                                            </P>
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
            ) : (
                <Login />
            )}
        </>
    );
};

export default Mypick;
