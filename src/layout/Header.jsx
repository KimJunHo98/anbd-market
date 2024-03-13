import React from "react";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import { useStateContext } from "../context/useStateContext";
import { categoryList } from "../constant";

import Search from "../components/Search";
import { H2, ALink, H1, HeaderTag, Container, Inner, Div, Img, Button, Span, Nav, Ul, Li, Icon } from "../styledComponents";

import { GoHomeFill } from "react-icons/go";
import { RiArrowLeftSLine } from "react-icons/ri";

const Header = () => {
    const { handleMenuClick, detailTopVisible } = useStateContext();
    const navigate = useNavigate("");
    const location = useLocation();
    const isDetailPage = location.pathname.includes("/detail");
    const isProfilePage = location.pathname.includes("/profile");

    const handleBackBtnClick = () => {
        navigate(-1);
    };
    const handleHomeBtnClick = () => {
        navigate("/");
    };

    return (
        <>
            {!isProfilePage && (
                <HeaderTag id={isDetailPage ? "detail_header" : "header"}>
                    <H2 className="blind">헤더</H2>
                    <Container>
                        <Inner className={`inner ${isDetailPage && detailTopVisible ? "visible" : "invisible"}`}>
                            <Div className={isDetailPage ? "detail_header" : "header"}>
                                <Div className={isDetailPage ? "detail_header_left" : "header_top"}>
                                    {isDetailPage && (
                                        // 디테일 페이지일 때 뒤로 가기 버튼 표시
                                        <Button onClick={handleBackBtnClick} className="back_btn" role="button" aria-label="뒤로 가기">
                                            <Icon className="left_arrow_icon detail_header_icon" aria-hidden="true">
                                                <RiArrowLeftSLine />
                                            </Icon>
                                        </Button>
                                    )}
                                    {!isDetailPage && (
                                        // 디테일 페이지가 아니면 로고 표시
                                        <H1 className="header_main_logo">
                                            <ALink to="/" className="header_link" role="link" aria-label="홈페이지로 이동">
                                                <Img src="/images/header/main_logo.png" alt="메인로고" className="logo_img" />
                                            </ALink>
                                        </H1>
                                    )}
                                    {!isDetailPage && (
                                        // 디테일 페이지가 아니면 메뉴 버튼 표시
                                        <Button onClick={handleMenuClick} className="menu_btn" role="button" aria-label="메뉴 열기">
                                            <Span className="bar" aria-hidden="true" />
                                        </Button>
                                    )}
                                </Div>
                                {!isDetailPage && (
                                    // 디테일 페이지가 아니면 검색과 카테고리 표시
                                    <Div className="header_bottom">
                                        <Search />
                                        <Nav className="header_nav" role="navigation">
                                            <Ul className="category_list">
                                                <Li className="category_items">
                                                    <NavLink
                                                        to="/product"
                                                        className="category_link"
                                                        end
                                                        role="link"
                                                        aria-current="page"
                                                        aria-label="상품 전체 페이지로 이동"
                                                    >
                                                        전체
                                                    </NavLink>
                                                </Li>
                                                {categoryList.map((category) => (
                                                    <Li className="category_items" key={category.text}>
                                                        <NavLink
                                                            to={`/product/${category.value}`}
                                                            className="category_link"
                                                            end
                                                            role="link"
                                                            aria-label={`${category.text} 페이지로 이동`}
                                                        >
                                                            {category.text}
                                                        </NavLink>
                                                    </Li>
                                                ))}
                                            </Ul>
                                        </Nav>
                                    </Div>
                                )}
                                {isDetailPage && (
                                    // 디테일 페이지일 때 홈과 메뉴 버튼 표시
                                    <Div className="detail_header_right">
                                        <Button
                                            onClick={handleHomeBtnClick}
                                            className="home_btn"
                                            role="button"
                                            aria-label="홈페이지로 가기"
                                        >
                                            <Icon className="home_icon detail_header_icon" aria-hidden="true">
                                                <GoHomeFill />
                                            </Icon>
                                        </Button>
                                        <Button onClick={handleMenuClick} className="menu_btn" role="button" aria-label="메뉴 열기">
                                            <Span className="bar" aria-hidden="true" />
                                        </Button>
                                    </Div>
                                )}
                            </Div>
                        </Inner>
                    </Container>
                </HeaderTag>
            )}
        </>
    );
};

export default Header;
