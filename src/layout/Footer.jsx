import React from "react";
import { ALink, Container, Div, FooterTag, H2, Inner, Li, Nav, Span, Ul } from "../styledComponents";

import { GoHome } from "react-icons/go";
import { FiUser } from "react-icons/fi";

const Footer = ({ isLogIn }) => {
    return (
        <FooterTag id="footer">
            <H2 className="blind">푸터</H2>
            <Container>
                <Inner className="inner">
                    <Div className="footer">
                        <Nav className="footer_nav">
                            <Ul className="quick_menu_list">
                                <Li className="quick_menu_items">
                                    <ALink to="/" className="quick_menu_link">
                                        <GoHome className="menu_icon" />
                                        <Span className="home">홈</Span>
                                    </ALink>
                                </Li>
                                <Li className="quick_menu_items">
                                    <ALink className="quick_menu_link">
                                        <GoHome className="menu_icon" />
                                        <Span className="home">홈</Span>
                                    </ALink>
                                </Li>
                                <Li className="quick_menu_items">
                                    <ALink className="quick_menu_link">
                                        <GoHome className="menu_icon" />
                                        <Span className="home">홈</Span>
                                    </ALink>
                                </Li>
                                <Li className="quick_menu_items">
                                    {isLogIn ? (
                                        <ALink to="/profile" className="quick_menu_link">
                                            <FiUser className="menu_icon" />
                                            <Span className="mypage">My</Span>
                                        </ALink>
                                    ) : (
                                        <ALink to="/login" className="quick_menu_link">
                                            <FiUser className="menu_icon" />
                                            <Span className="mypage">My</Span>
                                        </ALink>
                                    )}
                                </Li>
                            </Ul>
                        </Nav>
                    </Div>
                </Inner>
            </Container>
        </FooterTag>
    );
};

export default Footer;
