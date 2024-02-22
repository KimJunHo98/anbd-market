import React from "react";
import useFetchProducts from "../hooks/useFetchProducts";

import Banner from "../components/Banner";

import { Container, Div, H2, Inner, P, Section, ALink, Article, Ul, Li, Img, H3 } from "../styledComponents";
import { FaAngleRight } from "react-icons/fa6";

const Home = () => {
    const { loading, filteredBestCategory, filteredFreeCategory, filteredExchangeCategory, filteredReuseCategory } = useFetchProducts();

    // 숫자에 쉼표 추가하는 함수
    const formatNumberWithCommas = (number) => {
        if (number === null || number === undefined) {
            return "N/A";
        }
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <>
            <Banner />
            <Section id="home">
                <H2 className="blind">홈</H2>
                <Container>
                    <Inner className="inner">
                        <Div className="home">
                            {loading ? (
                                <Div className="loading">
                                    <P>로딩 중...</P>
                                </Div>
                            ) : (
                                <>
                                    {filteredBestCategory.length === 0 ? null : (
                                        <>
                                            <Article className="home_item_wrap">
                                                <H3 className="home_item_title">상태 좋은 아이템</H3>
                                                <Div className="home_item_box">
                                                    {filteredBestCategory.slice(0, 3).map((best) => (
                                                        <ALink to={`/product/detail/${best.id}`} key={best.id} className="home_item">
                                                            <Div className="home_image">
                                                                {best.imageUrl && <Img src={best.imageUrl[0]} alt={best.title} />}
                                                            </Div>
                                                            <Ul className="home_col_text">
                                                                <Li className="title">{best.title}</Li>
                                                                <Li className="depth_text">
                                                                    <Ul className="depth_item">
                                                                        {best.brand === "" ? null : <Li className="brand">{best.brand}</Li>}
                                                                        <Li className="size">{best.size}</Li>
                                                                    </Ul>
                                                                </Li>
                                                                <Li className="price">{formatNumberWithCommas(best.price)}원</Li>
                                                            </Ul>
                                                        </ALink>
                                                    ))}
                                                </Div>
                                                <Div className="show_more">
                                                    <ALink to="/product/best" className="more_btn">
                                                        더보기
                                                        <FaAngleRight />
                                                    </ALink>
                                                </Div>
                                            </Article>
                                        </>
                                    )}
                                    {filteredFreeCategory.length === 0 ? null : (
                                        <>
                                            <Article className="home_item_wrap">
                                                <H3 className="home_item_title">무료 나눔 아이템</H3>
                                                <Div className="home_item_box">
                                                    {filteredFreeCategory.slice(0, 3).map((free) => (
                                                        <ALink to={`/product/detail/${free.id}`} key={free.id} className="home_item">
                                                            <Div className="home_image">
                                                                {free.imageUrl && <Img src={free.imageUrl[0]} alt={free.title} />}
                                                            </Div>
                                                            <Ul className="home_col_text">
                                                                <Li className="title">{free.title}</Li>
                                                                <Li className="depth_text">
                                                                    <Ul className="depth_item">
                                                                        {free.brand === "" ? null : <Li className="brand">{free.brand}</Li>}
                                                                        <Li className="size">{free.size}</Li>
                                                                    </Ul>
                                                                </Li>
                                                                <Li className="price">{formatNumberWithCommas(free.price)}원</Li>
                                                            </Ul>
                                                        </ALink>
                                                    ))}
                                                </Div>
                                                <Div className="show_more">
                                                    <ALink to="/product/free" className="more_btn">
                                                        더보기
                                                        <FaAngleRight />
                                                    </ALink>
                                                </Div>
                                            </Article>
                                        </>
                                    )}
                                    {filteredExchangeCategory.length === 0 ? null : (
                                        <>
                                            <Article className="home_item_wrap">
                                                <H3 className="home_item_title">물품을 교환해보세요</H3>
                                                <Div className="home_item_box">
                                                    {filteredExchangeCategory.slice(0, 3).map((exchange) => (
                                                        <ALink
                                                            to={`/product/detail/${exchange.id}`}
                                                            key={exchange.id}
                                                            className="home_item"
                                                        >
                                                            <Div className="home_image">
                                                                {exchange.imageUrl && (
                                                                    <Img src={exchange.imageUrl[0]} alt={exchange.title} />
                                                                )}
                                                            </Div>
                                                            <Ul className="home_col_text">
                                                                <Li className="title">{exchange.title}</Li>
                                                                <Li className="depth_text">
                                                                    <Ul className="depth_item">
                                                                        {exchange.brand === "" ? null : (
                                                                            <Li className="brand">{exchange.brand}</Li>
                                                                        )}
                                                                        <Li className="size">{exchange.size}</Li>
                                                                    </Ul>
                                                                </Li>
                                                                <Li className="price">{formatNumberWithCommas(exchange.price)}원</Li>
                                                            </Ul>
                                                        </ALink>
                                                    ))}
                                                </Div>
                                                <Div className="show_more">
                                                    <ALink to="/product/exchange" className="more_btn">
                                                        더보기
                                                        <FaAngleRight />
                                                    </ALink>
                                                </Div>
                                            </Article>
                                        </>
                                    )}
                                    {filteredReuseCategory.length === 0 ? null : (
                                        <>
                                            <Article className="home_item_wrap">
                                                <H3 className="home_item_title">다시 쓸만한 아이템</H3>
                                                <Div className="home_item_box">
                                                    {filteredReuseCategory.slice(0, 3).map((reuse) => (
                                                        <ALink to={`/product/detail/${reuse.id}`} key={reuse.id} className="home_item">
                                                            <Div className="home_image">
                                                                {reuse.imageUrl && <Img src={reuse.imageUrl[0]} alt={reuse.title} />}
                                                            </Div>
                                                            <Ul className="home_col_text">
                                                                <Li className="title">{reuse.title}</Li>
                                                                <Li className="depth_text">
                                                                    <Ul className="depth_item">
                                                                        {reuse.brand === "" ? null : (
                                                                            <Li className="brand">{reuse.brand}</Li>
                                                                        )}
                                                                        <Li className="size">{reuse.size}</Li>
                                                                    </Ul>
                                                                </Li>
                                                                <Li className="price">{formatNumberWithCommas(reuse.price)}원</Li>
                                                            </Ul>
                                                        </ALink>
                                                    ))}
                                                </Div>
                                                <Div className="show_more">
                                                    <ALink to="/product/reuse" className="more_btn">
                                                        더보기
                                                        <FaAngleRight />
                                                    </ALink>
                                                </Div>
                                            </Article>
                                        </>
                                    )}
                                </>
                            )}
                        </Div>
                    </Inner>
                </Container>
            </Section>
        </>
    );
};

export default Home;
