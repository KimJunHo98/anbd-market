import React, { useEffect, useRef, useState } from "react";
import useFetchProducts from "../hooks/useFetchProducts";
import useFetchPickedItems from "../hooks/useFetchPickedItems";
import { useStateContext } from "../context/useStateContext";
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase";

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
    const { product, loading, handleBuyBtnClick } = useFetchProducts();
    const { handleToggleLike, filteredPickeditem } = useFetchPickedItems();
    const [showBtns, setShowBtns] = useState(false);
    const [toggleEditing, setToggleEditing] = useState(false);
    const [newText, setNewText] = useState(product.desc);

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

    const formatNumberWithCommas = (number) => {
        if (number === null || number === undefined) {
            return "N/A";
        }
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    // 수정과 관련된 함수
    // 버튼 클릭함수
    const handleBtnClick = () => {
        setShowBtns((prevShow) => !prevShow);
    };
    const handleEditBtnClick = () => {
        setToggleEditing(true);
        setShowBtns(true);
        setNewText(product.desc);
    };
    const handleCancelBtnClick = () => {
        setToggleEditing(false);
    };

    // 텍스트 수정 함수
    const onChange = (e) => {
        setNewText(e.target.value);
    };
    const onSubmit = async (e) => {
        e.preventDefault();
    
        // updateDoc 메소드를 사용해 서버에 업데이트 요청
        const updateTextRef = doc(firestore, "product", product.id);
        await updateDoc(updateTextRef, {
            desc: newText
        });
    
        setToggleEditing(false);
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
                                                <Img src={url} alt={product.title} onLoad={handleImageLoad} className="detail_image" />
                                            </SwiperSlide>
                                        ))}
                                </Swiper>
                            </DetailImage>
                            <Div className="detail_top" ref={detailTopRef}>
                                <Div className="detail_user">
                                    <Icon className="thumb">
                                        <FaUserCircle />
                                    </Icon>
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
                                    <Button onClick={handleBtnClick} className="edit_btn">
                                        <Icon className="dot_icon">
                                            <HiDotsHorizontal />
                                        </Icon>
                                        <Span onClick={handleEditBtnClick} className={`edit ${showBtns ? "show" : ""}`}>
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
                                        <Icon className="heart_empty_icon">
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
                                        <Form onSubmit={onSubmit} className="edit_form">
                                            <TextArea
                                                className="edit_textbox"
                                                name="text"
                                                placeholder="게시물을 수정하세요"
                                                required
                                                value={newText}
                                                onChange={onChange}
                                                wrap="hard"
                                                autoFocus="autoFocus"
                                            />
                                            <Label htmlFor="edit_btn" className="blind">
                                                수정하기
                                            </Label>
                                            <Input id="edit_btn" className="edit_btn" type="submit" value="수정" />
                                            <Button className="cancel_btn" onClick={handleCancelBtnClick}>
                                                취소
                                            </Button>
                                        </Form>
                                    </Div>
                                ) : (
                                    <P className="desc">
                                        {product.desc} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, atque tempore
                                        dolores ullam quibusdam accusamus sapiente. Nemo magni atque in porro eius, saepe dignissimos
                                        officia repellendus quidem rerum, quibusdam itaque. Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Eum, fuga, molestias esse eos accusamus dolorem amet possimus corporis consectetur
                                        mollitia rem dicta aspernatur exercitationem numquam ut cumque iusto vero repudiandae. Lorem ipsum,
                                        dolor sit amet consectetur adipisicing elit. Reiciendis consequatur corrupti, amet, quos fugit
                                        adipisci quisquam quibusdam unde corporis incidunt id nam assumenda eveniet! Quisquam, quas iusto!
                                        Quis, aliquam qui? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos pariatur nisi
                                        optio nobis, voluptate harum id vero sed aperiam veritatis facilis recusandae rem obcaecati
                                        perspiciatis, neque amet numquam rerum cupiditate. Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Dicta aut corrupti, doloribus sunt nesciunt voluptatum nihil consectetur placeat
                                        ut provident quae quas nemo aperiam saepe quis, obcaecati numquam exercitationem itaque! Lorem ipsum
                                        dolor sit amet consectetur, adipisicing elit. Alias quaerat inventore excepturi eius accusamus illo
                                        error magnam veniam dolorum velit maiores facilis, corporis minima sed dicta, non molestiae. Ipsa,
                                        quas.
                                    </P>
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
