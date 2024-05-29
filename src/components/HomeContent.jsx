import React from "react";
import useFetchProducts from "../hooks/useFetchProducts";
import { FaAngleRight } from "react-icons/fa6";

import { Article, Ul, Li, Img, H3, ALink, Div, Figure } from "../styledComponents";

const HomeContent = () => {
    const { filteredBestCategory, filteredFreeCategory, filteredExchangeCategory, filteredReuseCategory, formatNumberWithCommas } =
        useFetchProducts();

    const renderHomeItems = (category, title, path) => (
        <>
            {category.length === 0 ? null : (
                <Article className="home_item_wrap">
                    <H3 className="home_item_title">{title}</H3>
                    <Div className="home_item_box">
                        {category
                            .filter((item) => !item.soldOut)
                            .slice(0, 3)
                            .map((item) => (
                                <ALink
                                    to={`/product/detail/${item.id}`}
                                    key={item.id}
                                    className="home_item"
                                    role="link"
                                    aria-label="상품 상세 페이지로 이동"
                                >
                                    <Figure className="home_image">
                                        {item.imageUrl && <Img src={item.imageUrl[0]} alt={item.title} loading="lazy" />}
                                    </Figure>
                                    <Ul className="home_col_text">
                                        <Li className="title">{item.title}</Li>
                                        <Li className="depth_text">
                                            <Ul className="depth_item">
                                                {item.brand !== "" && <Li className="brand">{item.brand}</Li>}
                                                <Li className="size">{item.size}</Li>
                                            </Ul>
                                        </Li>
                                        <Li className="price">{formatNumberWithCommas(item.price)}원</Li>
                                    </Ul>
                                </ALink>
                            ))}
                    </Div>
                    <Div className="show_more">
                        <ALink to={path} className="more_btn" role="link" aria-label="상품 더보기">
                            더보기
                            <FaAngleRight />
                        </ALink>
                    </Div>
                </Article>
            )}
        </>
    );

    return (
        <>
            {renderHomeItems(filteredBestCategory, "상태 좋은 아이템", "/product/best")}
            {renderHomeItems(filteredFreeCategory, "무료 나눔 아이템", "/product/free")}
            {renderHomeItems(filteredExchangeCategory, "물품을 교환해보세요", "/product/exchange")}
            {renderHomeItems(filteredReuseCategory, "다시 쓸만한 아이템", "/product/reuse")}
        </>
    );
};

export default HomeContent;
