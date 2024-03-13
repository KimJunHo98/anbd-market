import React, { useEffect, useRef } from "react";
import useFetchProducts from "../hooks/useFetchProducts";
import useFetchPickedItems from "../hooks/useFetchPickedItems";
import useEdit from "../hooks/useEdit";
import { useStateContext } from "../context/useStateContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import {
    Article,
    Button,
    Container,
    DetailImage,
    Div,
    H2,
    H3,
    H4,
    Icon,
    Img,
    Input,
    Label,
    P,
    Section,
    Span,
    TextArea,
    Form,
    Loading,
    Figure,
} from "../styledComponents";
import { FaUserCircle } from "react-icons/fa";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

const Detail = () => {
    const { setDetailTopVisible, isLogIn } = useStateContext();
    const { product, loading, handleBuyBtnClick, formatNumberWithCommas } = useFetchProducts();
    const { handleToggleLike, filteredPickeditem } = useFetchPickedItems();
    const { handleBtnClick, handleEditBtnClick, showBtns, toggleEditing, onSubmit, newText, onChange, handleCancelBtnClick } = useEdit();

    const detailTopRef = useRef(null);

    const handleScroll = () => {
        const detailTop = detailTopRef.current;
        const gap = 80;

        if (detailTop) {
            const offsetTop = detailTop.offsetTop - gap; // offsetTop에 80px을 뺀 값에 도달하면 state 변경
            const scrollTop = document.documentElement.scrollTop || window.scrollY;
            const triggerOffset = offsetTop;

            if (scrollTop < triggerOffset) {
                setDetailTopVisible(false);
            } else {
                setDetailTopVisible(true);
            }
        }
    };

    // 이미지 로딩이 완료된 후에 스크롤 이벤트를 호출
    const handleImageLoad = () => {
        handleScroll();
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Section id="detail">
            <H2 className="blind">상품 디테일 페이지</H2>
            <Container>
                <Div className="detail">
                    {loading ? (
                        <Loading role="status" aria-live="assertive">
                            <P>로딩 중...</P>
                        </Loading>
                    ) : (
                        <Article className="detail_item_wrap">
                            <DetailImage>
                                <Swiper
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    pagination={{
                                        type: "fraction",
                                        clickable: true,
                                    }}
                                    mousewheel={true}
                                    keyboard={true}
                                    modules={[Pagination, Keyboard]}
                                    className="swiper_wrap"
                                >
                                    {product.imageUrl &&
                                        product.imageUrl.map((url, i) => (
                                            <SwiperSlide key={url + i}>
                                                <Figure>
                                                    <Img src={url} alt={product.title} onLoad={handleImageLoad} className="detail_image" />
                                                </Figure>
                                            </SwiperSlide>
                                        ))}
                                </Swiper>
                            </DetailImage>
                            <Div className="detail_top" ref={detailTopRef}>
                                <Div className="detail_user">
                                    <Icon className="thumb" aria-hidden="true">
                                        <FaUserCircle />
                                    </Icon>
                                    <H3 className="username">{product.username}</H3>
                                </Div>
                                <Div className="user_btns">
                                    <Button onClick={handleToggleLike} className="pick_btn" role="button">
                                        {filteredPickeditem.length > 0 ? (
                                            <IoMdHeart style={{ fill: "var(--accent-color)" }} aria-label="찜하기 취소" />
                                        ) : (
                                            <IoMdHeartEmpty aria-label="찜하기" />
                                        )}
                                    </Button>
                                    <Button
                                        onClick={handleBuyBtnClick}
                                        className={`buy_btn ${product.soldOut ? "soldout" : ""}`}
                                        disabled={product.soldOut}
                                        role="button"
                                        aria-label={`${product.soldOut ? "거래완료" : "구매하기"}`}
                                    >
                                        {product.soldOut ? "거래완료" : "구매하기"}
                                    </Button>
                                    <Button onClick={handleBtnClick} className="edit_btn" role="button" aria-label="수정 버튼 나타내기">
                                        <Icon className="dot_icon">
                                            <HiDotsHorizontal />
                                        </Icon>
                                        <Span
                                            onClick={handleEditBtnClick}
                                            className={`edit ${showBtns ? "show" : ""}`}
                                            aria-label="수정 하기"
                                        >
                                            수정
                                        </Span>
                                    </Button>
                                </Div>
                            </Div>
                            <Div className="detail_text">
                                <H4 className="title">{product.title}</H4>
                                <P className="price">{formatNumberWithCommas(product.price)}원</P>
                                <Div className="row_text top">
                                    <P className="sub_category">
                                        {product.category === "best"
                                            ? "베스트>"
                                            : product.category === "exchange"
                                            ? "교환>"
                                            : product.category === "free"
                                            ? "나눔>"
                                            : product.category === "reuse"
                                            ? "재사용>"
                                            : ""}
                                        {product.subCategoryText}
                                        <Span className="time">{dayjs(product.createdAt).fromNow()}</Span>
                                    </P>
                                    <P className="pick">
                                        <Icon className="heart_empty_icon" aria-hidden="true">
                                            <IoMdHeartEmpty />
                                        </Icon>
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
                                {toggleEditing && isLogIn ? (
                                    <Div className="editing_box">
                                        <Form onSubmit={onSubmit} className="edit_form" role="form">
                                            <TextArea
                                                className="edit_textbox"
                                                name="text"
                                                placeholder="게시물을 수정하세요"
                                                required
                                                value={newText}
                                                onChange={onChange}
                                                wrap="hard"
                                                autoFocus="autoFocus"
                                                aria-label="게시물 수정"
                                            />
                                            <Label htmlFor="edit_btn" className="blind">
                                                수정하기
                                            </Label>
                                            <Input
                                                id="edit_btn"
                                                className="edit_btn"
                                                type="submit"
                                                value="수정"
                                                aria-label="게시물 수정 완료"
                                            />
                                            <Button
                                                className="cancel_edit_btn"
                                                onClick={handleCancelBtnClick}
                                                role="button"
                                                aria-label="취소 하기"
                                            >
                                                취소
                                            </Button>
                                        </Form>
                                    </Div>
                                ) : (
                                    <P className="desc">{product.desc}</P>
                                )}
                            </Div>
                        </Article>
                    )}
                </Div>
            </Container>
        </Section>
    );
};

export default Detail;
