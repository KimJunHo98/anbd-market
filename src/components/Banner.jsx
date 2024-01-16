import React from "react";
import { images } from "../constant";
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
                            {images.slice(0, 5).map((image) => (
                                <SwiperSlide className="slide_items" key={image.title}>
                                    <Img src={image.src} alt={image.title} className="banner_img" />
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
