import React from "react";
import useFetchProducts from "../hooks/useFetchProducts";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import { Article, Button, Container, Div, H2, H3, H4, Img, P, Section, Span } from "../styledComponents";
import { FaUserCircle } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";

dayjs.extend(relativeTime);
dayjs.locale("ko");

const Detail = () => {
    const { product, loading } = useFetchProducts();

    return (
        <Section id="detail">
            <H2 className="blind">상품 디테일 페이지</H2>
            <Container>
                <Div className="detail">
                    {loading ? (
                        <Div className="loading">
                            <P>로딩 중...</P>
                        </Div>
                    ) : (
                        <Article className="detail_item_wrap">
                            <Div className="detail_image">
                                <Img src={product.imageUrl} alt={product.title} />
                            </Div>
                            <Div className="detail_top">
                                <Div className="detail_user">
                                    <Span className="thumb">
                                        <FaUserCircle />
                                    </Span>
                                    <H3 className="username">{product.username}</H3>
                                </Div>
                                <Div className="user_btns">
                                    <Button className="pick_btn">
                                        <IoMdHeartEmpty />
                                    </Button>
                                    <Button className="buy_btn">구매하기</Button>
                                </Div>
                            </Div>
                            <Div className="detail_text">
                                <H4 className="title">{product.title}</H4>
                                <Div className="row_text">
                                    <P className="subCategory">
                                        {product.category === "best"
                                            ? "베스트 > "
                                            : product.category === "exchange"
                                            ? "교환 > "
                                            : product.category === "free"
                                            ? "나눔 > "
                                            : product.category === "reuse"
                                            ? "재사용 > "
                                            : ""}
                                        {product.subCategoryText}
                                    </P>
                                    <P className="price">{product.price}원</P>
                                    <P className="time">{dayjs(product.createdAt).fromNow()}</P>
                                </Div>
                                <Div className="row_text">
                                    {product.brand && <P className="brand">{product.brand}</P>}
                                    {product.size && <P className="size">{product.size}</P>}
                                </Div>
                                <P className="desc">{product.desc}</P>
                            </Div>
                        </Article>
                    )}
                </Div>
            </Container>
        </Section>
    );
};

export default Detail;
