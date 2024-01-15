import React from "react";
import { Container, Div, FooterTag, H2, Inner, Li, Nav, Span, Ul, Paginate } from "../styledComponents";

import { GoHomeFill } from "react-icons/go";
import { RiUser3Fill } from "react-icons/ri";

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
                                    <Paginate to="/" exact="true" className="quick_menu_link" activeclassname="active">
                                        <GoHomeFill className="menu_icon" />
                                        <Span className="home">홈</Span>
                                    </Paginate>
                                </Li>
                                <Li className="quick_menu_items">
                                    <Paginate className="quick_menu_link" activeclassname="active">
                                        <GoHomeFill className="menu_icon" />
                                        <Span className="home">홈</Span>
                                    </Paginate>
                                </Li>
                                <Li className="quick_menu_items">
                                    <Paginate className="quick_menu_link" activeclassname="active">
                                        <GoHomeFill className="menu_icon" />
                                        <Span className="home">홈</Span>
                                    </Paginate>
                                </Li>
                                <Li className="quick_menu_items">
                                    {isLogIn ? (
                                        <Paginate to="/profile" className="quick_menu_link" activeclassname="active">
                                            <RiUser3Fill className="menu_icon" />
                                            <Span className="mypage">My</Span>
                                        </Paginate>
                                    ) : (
                                        <Paginate to="/login" className="quick_menu_link" activeclassname="active">
                                            <RiUser3Fill className="menu_icon" />
                                            <Span className="mypage">My</Span>
                                        </Paginate>
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
