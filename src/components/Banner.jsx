import React from "react";
import { Container, Div, H2, Img, Section } from "../styledComponents";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
    return (
        <Section id="banner">
            <H2 className="blind">배너 영역</H2>
            <Container>
                <Div className="banner">
                    <Div className="banner_wrap">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{
                                dynamicBullets: true,
                                clickable: true,
                            }}
                            mousewheel={true}
                            keyboard={true}
                            loop={true}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
                            className="swiper_wrap"
                        >
                            <SwiperSlide className="slide_items">
                                <Img src="/images/banner/img_ban1.svg" alt="배너 이미지1" className="banner_img" />
                            </SwiperSlide>
                            <SwiperSlide className="slide_items">
                                <Img src="/images/banner/img_ban2.svg" alt="배너 이미지1" className="banner_img" />
                            </SwiperSlide>
                            <SwiperSlide className="slide_items">
                                <Img src="/images/banner/img_ban3.svg" alt="배너 이미지1" className="banner_img" />
                            </SwiperSlide>
                            <SwiperSlide className="slide_items">
                                <Img src="/images/banner/img_ban4.svg" alt="배너 이미지1" className="banner_img" />
                            </SwiperSlide>
                            <SwiperSlide className="slide_items">
                                <Img src="/images/banner/img_ban5.svg" alt="배너 이미지1" className="banner_img" />
                            </SwiperSlide>
                        </Swiper>
                    </Div>
                </Div>
            </Container>
        </Section>
    );
};

export default Banner;
