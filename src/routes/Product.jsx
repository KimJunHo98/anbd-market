import React from "react";
import useFetchProducts from "../hooks/useFetchProducts";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import { Div, ALink, H2, Article, Ul, Li, Img, P, H3 } from "../styledComponents";
import { FaAngleRight } from "react-icons/fa6";

dayjs.extend(relativeTime);
dayjs.locale("ko");

const Product = () => {
    const { loading, filteredBestCategory, filteredFreeCategory, filteredExchangeCategory, filteredReuseCategory } = useFetchProducts();

    // 숫자에 쉼표 추가하는 함수
    const formatNumberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    console.log(filteredBestCategory, filteredFreeCategory, filteredExchangeCategory, filteredReuseCategory);
    return (
        <Article id="product">
            <H2 className="blind">상품 페이지</H2>
            <Div className="product">
                {loading ? (
                    <Div className="loading">
                        <P>로딩 중...</P>
                    </Div>
                ) : (
                    <>
                        {filteredBestCategory.length === 0 ? null : (
                            <>
                                <Article className="product_item_wrap">
                                    <H3 className="product_item_title">상태 좋은 아이템</H3>
                                    <Div className="product_item_box">
                                        {filteredBestCategory.slice(0, 3).map((best) => (
                                            <ALink to={`/product/detail/${best.id}`} key={best.id} className="product_item">
                                                <Div className="product_image">
                                                    <Img src={best.imageUrl} alt={best.title} />
                                                </Div>
                                                <Ul className="product_col_text">
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
                                <Article className="product_item_wrap">
                                    <H3 className="product_item_title">무료 나눔 아이템</H3>
                                    <Div className="product_item_box">
                                        {filteredFreeCategory.slice(0, 3).map((best) => (
                                            <ALink to={`/product/detail/${best.id}`} key={best.id} className="product_item">
                                                <Div className="product_image">
                                                    <Img src={best.imageUrl} alt={best.title} />
                                                </Div>
                                                <Ul className="product_col_text">
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
                                <Article className="product_item_wrap">
                                    <H3 className="product_item_title">물품을 교환해보세요</H3>
                                    <Div className="product_item_box">
                                        {filteredExchangeCategory.slice(0, 3).map((best) => (
                                            <ALink to={`/product/detail/${best.id}`} key={best.id} className="product_item">
                                                <Div className="product_image">
                                                    <Img src={best.imageUrl} alt={best.title} />
                                                </Div>
                                                <Ul className="product_col_text">
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
                                <Article className="product_item_wrap">
                                    <H3 className="product_item_title">다시 쓸만한 아이템</H3>
                                    <Div className="product_item_box">
                                        {filteredReuseCategory.slice(0, 3).map((best) => (
                                            <ALink to={`/product/detail/${best.id}`} key={best.id} className="product_item">
                                                <Div className="product_image">
                                                    <Img src={best.imageUrl} alt={best.title} />
                                                </Div>
                                                <Ul className="product_col_text">
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
        </Article>
    );
};

export default Product;
