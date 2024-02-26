import React from "react";
import useFetchProducts from "../hooks/useFetchProducts";
import useFetchPickedItems from "../hooks/useFetchPickedItems";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Article, Button, Container, Div, H2, H3, H4, Img, P, Section, Span } from "../styledComponents";
import { FaUserCircle } from "react-icons/fa";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

const Detail = () => {
    const { product, loading, handleBuyBtnClick } = useFetchProducts();
    const { handleToggleLike, filteredPickeditem } = useFetchPickedItems();

    const formatNumberWithCommas = (number) => {
        if (number === null || number === undefined) {
            return "N/A";
        }
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

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
                                <Swiper
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    pagination={{
                                        type: "fraction",
                                        clickable: true,
                                    }}
                                    mousewheel={true}
                                    keyboard={true}
                                    modules={[Pagination, Mousewheel, Keyboard]}
                                    className="swiper_wrap"
                                >
                                    {product.imageUrl &&
                                        product.imageUrl.map((url, i) => (
                                            <SwiperSlide key={url + i}>
                                                <Img src={url} alt={product.title} />
                                            </SwiperSlide>
                                        ))}
                                </Swiper>
                            </Div>
                            <Div className="detail_top">
                                <Div className="detail_user">
                                    <Span className="thumb">
                                        <FaUserCircle />
                                    </Span>
                                    <H3 className="username">{product.username}</H3>
                                </Div>
                                <Div className="user_btns">
                                    <Button onClick={handleToggleLike} className="pick_btn">
                                        {filteredPickeditem.length > 0 ? (
                                            <IoMdHeart style={{ fill: "var(--accent-color)" }} />
                                        ) : (
                                            <IoMdHeartEmpty />
                                        )}
                                    </Button>
                                    <Button
                                        onClick={handleBuyBtnClick}
                                        className={`buy_btn ${product.soldOut ? "soldout" : ""}`}
                                        disabled={product.soldOut}
                                    >
                                        {product.soldOut ? "거래완료" : "구매하기"}
                                    </Button>
                                </Div>
                            </Div>
                            <Div className="detail_text">
                                <H4 className="title">{product.title}</H4>
                                <P className="price">{formatNumberWithCommas(product.price)}원</P>
                                <Div className="row_text top">
                                    <P className="sub_category">
                                        {product.category === "best"
                                            ? "베스트/"
                                            : product.category === "exchange"
                                            ? "교환/"
                                            : product.category === "free"
                                            ? "나눔/"
                                            : product.category === "reuse"
                                            ? "재사용/"
                                            : ""}
                                        {product.subCategoryText}
                                        <Span className="time">{dayjs(product.createdAt).fromNow()}</Span>
                                    </P>
                                    <P className="pick">
                                        <IoMdHeartEmpty />
                                        {filteredPickeditem.length > 0 ? (
                                            <Span className="pick_text">{filteredPickeditem[0].count}</Span>
                                        ) : (
                                            "0"
                                        )}
                                    </P>
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
