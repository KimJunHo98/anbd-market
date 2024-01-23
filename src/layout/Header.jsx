import React from "react";
import { useStateContext } from "../context/useStateContext";
import { categoryList } from "../constant";
import { H2, ALink, H1, HeaderTag, Container, Inner, Div, Img, Button, Span, Nav, Ul, Li, StyledNavLink } from "../styledComponents";

import Search from "../components/Search";

const Header = () => {
    const { handleMenuClick } = useStateContext();

    return (
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
                                        <StyledNavLink to="/product" className="category_link" activeclassname="active">
                                            전체
                                        </StyledNavLink>
                                    </Li>
                                    {categoryList.map((category) => (
                                        <Li className="category_items" key={category.text}>
                                            <StyledNavLink
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
                </Inner>
            </Container>
        </HeaderTag>
    );
};

export default Header;
