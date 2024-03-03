import React from "react";
import { useStateContext } from "../context/useStateContext";
import { footerNav } from "../constant";

import Sell from "../components/Sell";
import Top from "../components/Top";
import { Container, Div, FooterTag, H2, Inner, Li, Nav, Span, Ul, Paginate, Icon } from "../styledComponents";

const Footer = () => {
    const { isLogIn } = useStateContext();

    return (
        <FooterTag id="footer">
            <H2 className="blind">푸터</H2>
            <Container>
                <Inner className="inner">
                    <Div className="footer">
                        <Sell />
                        <Top />
                        <Nav className="footer_nav">
                            <Ul className="quick_menu_list">
                                {footerNav.map((footer) => (
                                    <Li className="quick_menu_items" key={footer.text}>
                                        {footer.path === "/profile" ? (
                                            isLogIn ? (
                                                <Paginate
                                                    to={footer.path}
                                                    exact="true"
                                                    className="quick_menu_link"
                                                    activeclassname="active"
                                                >
                                                    <Icon className="menu_icon">{footer.icon}</Icon>
                                                    <Span className="quick_menu_text">{footer.text}</Span>
                                                </Paginate>
                                            ) : (
                                                <Paginate to="/login" exact="true" className="quick_menu_link" activeclassname="active">
                                                    <Icon className="menu_icon">{footer.icon}</Icon>
                                                    <Span className="quick_menu_text">{footer.text}</Span>
                                                </Paginate>
                                            )
                                        ) : (
                                            <Paginate to={footer.path} exact="true" className="quick_menu_link" activeclassname="active">
                                                <Icon className="menu_icon">{footer.icon}</Icon>
                                                <Span className="quick_menu_text">{footer.text}</Span>
                                            </Paginate>
                                        )}
                                    </Li>
                                ))}
                            </Ul>
                        </Nav>
                    </Div>
                </Inner>
            </Container>
        </FooterTag>
    );
};

export default Footer;
