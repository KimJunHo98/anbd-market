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
            {isProfilePage ? null : (
                <>
                    {!isDetailPage ? (
                        <HeaderTag id="header">
                            <H2 className="blind">헤더</H2>
                            <Container>
                                <Inner className="inner">
                                    <Div className="header">
                                        <Div className="header_top">
                                            <H1>
                                                <ALink to="/" className="header_link">
                                                    <Img src="/images/header/main_logo.png" alt="메인로고" className="logo_img" />
                                                </ALink>
                                            </H1>
                                            <Button onClick={handleMenuClick} className="menu_btn">
                                                <Span className="bar" />
                                            </Button>
                                        </Div>
                                        <Div className="header_bottom">
                                            <Search />
                                            <Nav className="header_nav">
                                                <Ul className="category_list">
                                                    <Li className="category_items">
                                                        <NavLink to="/product" className="category_link" end>
                                                            전체
                                                        </NavLink>
                                                    </Li>
                                                    {categoryList.map((category) => (
                                                        <Li className="category_items" key={category.text}>
                                                            <NavLink to={`/product/${category.value}`} className="category_link" end>
                                                                {category.text}
                                                            </NavLink>
                                                        </Li>
                                                    ))}
                                                </Ul>
                                            </Nav>
                                        </Div>
                                    </Div>
                                </Inner>
                            </Container>
                        </HeaderTag>
                    ) : (
                        <HeaderTag id="detail_header">
                            <H2 className="blind">헤더</H2>
                            <Container>
                                <Inner className={`inner ${detailTopVisible ? "visible" : ""}`}>
                                    <Div className="detail_header">
                                        <Div className="detail_header_left">
                                            <Button onClick={handleBackBtnClick} className="back_btn">
                                                <Icon className="left_arrow_icon detail_header_icon">
                                                    <RiArrowLeftSLine />
                                                </Icon>
                                            </Button>
                                        </Div>
                                        <Div className="detail_header_right">
                                            <Button onClick={handleHomeBtnClick} className="home_btn">
                                                <Icon className="home_icon detail_header_icon">
                                                    <GoHomeFill />
                                                </Icon>
                                            </Button>
                                            <Button onClick={handleMenuClick} className="menu_btn">
                                                <Span className="bar" />
                                            </Button>
                                        </Div>
                                    </Div>
                                </Inner>
                            </Container>
                        </HeaderTag>
                    )}
                </>
            )}
        </>
    );
};

export default Header;
