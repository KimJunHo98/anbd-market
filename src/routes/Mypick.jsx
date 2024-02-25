import React from "react";
import useFetchPickedItems from "../hooks/useFetchPickedItems";

import { ALink, Article, Container, Div, H2, Img, Inner, Li, P, Section, Ul } from "../styledComponents";
import { IoMdHeartEmpty } from "react-icons/io";

const Mypick = () => {
    const { loading, pickedItems } = useFetchPickedItems();

    const formatNumberWithCommas = (number) => {
        if (number === null || number === undefined) {
            return "N/A";
        }
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <Section id="myPick">
            <H2 className="blind">찜목록</H2>
            <Container>
                <Inner>
                    <Div className="my_pick">
                        {loading ? (
                            <Div className="loading">
                                <P>로딩 중...</P>
                            </Div>
                        ) : (
                            <>
                                {pickedItems.length === 0 ? (
                                    <P className="not_have">찜한 상품이 없습니다.</P>
                                ) : (
                                    pickedItems.map((pick) => (
                                        <Article key={pick.id} className="pick_list">
                                            <Div className="pick_image">{pick.imgUrl && <Img src={pick.imgUrl[0]} alt={pick.title} />}</Div>
                                            <Div className="pick_text">
                                                <Ul className="col_text">
                                                    <Li className="title">{pick.title}</Li>
                                                    <Li className="price">{formatNumberWithCommas(pick.price)}원</Li>
                                                </Ul>
                                                <Ul className="row_text">
                                                    {pick.brand === "" ? null : <Li className="brand">{pick.brand}</Li>}
                                                    <Li className="size">{pick.size}</Li>
                                                    <Li className="pick_count">
                                                        <IoMdHeartEmpty />
                                                        {pick.count}
                                                    </Li>
                                                </Ul>
                                            </Div>
                                        </Article>
                                    ))
                                )}
                            </>
                        )}
                    </Div>
                </Inner>
            </Container>
        </Section>
    );
};

export default Mypick;
