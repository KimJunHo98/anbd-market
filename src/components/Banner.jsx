import React, { useRef, useState } from "react";
import { bannerImages } from "../constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";

import { Button, Container, Div, Figure, H2, Icon, Img, Section } from "../styledComponents";
import "swiper/css";
import "swiper/css/pagination";

import { HiMiniPause, HiPlayPause } from "react-icons/hi2";

const Banner = () => {
    const [isPause, setIsPause] = useState(false);
    const swiperRef = useRef(null);

    const handleTogglePlayBtnClick = () => {
        setIsPause((prevPlay) => !prevPlay);

        if (swiperRef.current && swiperRef.current.swiper) {
            if (!isPause) {
                swiperRef.current.swiper.autoplay.stop();
            } else {
                swiperRef.current.swiper.autoplay.start();
            }
        }
    };

    return (
        <Section id="banner" role="banner">
            <H2 className="blind">배너 영역</H2>
            <Container>
                <Div className="banner">
                    <Div className="banner_wrap">
                        <Button className="playPause_btn" onClick={handleTogglePlayBtnClick} role="button"  aria-label={isPause ? "재생 시작" : "일시 정지"}>
                            {isPause ? (
                                <Icon className="playPause_icon" aria-hidden="true">
                                    <HiPlayPause />
                                </Icon>
                            ) : (
                                <Icon className="playPause_icon" aria-hidden="true">
                                    <HiMiniPause />
                                </Icon>
                            )}
                        </Button>
                        <Swiper
                            ref={swiperRef}
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
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
                            className="swiper_wrap"
                        >
                            {bannerImages.slice(5, 7).map((banner) => (
                                <SwiperSlide className="slide_items" key={banner.title}>
                                    <Figure>
                                        <Img src={banner.src} alt={banner.alt} className="banner_img" />
                                    </Figure>
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
