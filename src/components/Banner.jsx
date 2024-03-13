import React from "react";
import { bannerImages } from "../constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";

import { Container, Div, H2, Img, Section } from "../styledComponents";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
    return (
        <Section id="banner" role="banner">
            <H2 className="blind">배너 영역</H2>
            <Container>
                <Div className="banner">
                    <Div className="banner_wrap">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{
                                type: "fraction",
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
                            {bannerImages.slice(5, 7).map((banner) => (
                                <SwiperSlide className="slide_items" key={banner.title}>
                                    <Img src={banner.src} alt={banner.title} className="banner_img" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Div>
                </Div>
            </Container>
        </Section>
    );
};

export default Banner;
