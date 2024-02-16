import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useStateContext } from "../context/useStateContext";
import { categoryList } from "../constant";

import Search from "../components/Search";
import {
    H2,
    ALink,
    H1,
    HeaderTag,
    Container,
    Inner,
    Div,
    Img,
    Button,
    Span,
    Nav,
    Ul,
    Li,
    StyledNavLink,
} from "../styledComponents";

import { IoMdSearch } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { RiArrowLeftSLine } from "react-icons/ri";

const Header = () => {
    const { handleMenuClick } = useStateContext();
    const [search, setSearch] = useState(false);
    const navigate = useNavigate("");
    const location = useLocation();

    const isDetailPage = location.pathname.includes("/detail");

    const handleBackBtnClick = () => {
        navigate(-1);
    };
    const handleHomeBtnClick = () => {
        navigate("/");
    };
    const handleSearchBtnClick = () => {
        setSearch((prevSearch) => !prevSearch);
    };
    const handleCancelBtnClick = () => {
        setSearch((prevSearch) => !prevSearch);
    };

    const renderSearch = () => (
        <Div className="toggle_search">
            <Div className="toggle_search_top">
                <Search />
                <Button onClick={handleCancelBtnClick} className="cancel_btn">
                    취소
                </Button>
            </Div>
        </Div>
    );

    return (
        <HeaderTag id="header">
            <H2 className="blind">헤더</H2>
            <Container>
                <Inner className="inner">
                    {!isDetailPage ? (
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
                                        {/* <Li className="category_items">
                                            <StyledNavLink to="/" className="category_link" activeclassname="active">
                                                전체
                                            </StyledNavLink>
                                        </Li> */}
                                        {categoryList.map((category) => (
                                            <Li className="category_items" key={category.text}>
                                                <StyledNavLink
                                                    exact="true"
                                                    to={`/product/${category.value}`}
                                                    className="category_link"
                                                    activeclassname="active"
                                                >
                                                    {category.text}
                                                </StyledNavLink>
                                            </Li>
                                        ))}
                                    </Ul>
                                </Nav>
                            </Div>
                        </Div>
                    ) : (
                        <Div className="detail_header">
                            <Div className="detail_header_left">
                                <Button onClick={handleBackBtnClick} className="back_btn">
                                    <RiArrowLeftSLine />
                                </Button>
                            </Div>
                            <Div className="detail_header_right">
                                <Button onClick={handleHomeBtnClick} className="home_btn">
                                    <GoHomeFill />
                                </Button>
                                <Button onClick={handleSearchBtnClick} className="detail_search_btn">
                                    <IoMdSearch />
                                </Button>
                                <Button onClick={handleMenuClick} className="menu_btn">
                                    <Span className="bar" />
                                </Button>
                            </Div>
                            {search && renderSearch()}
                        </Div>
                    )}
                </Inner>
            </Container>
        </HeaderTag>
    );
};

export default Header;
