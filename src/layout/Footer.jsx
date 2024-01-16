import React from "react";
import { footerNav } from "../constant";
import { Container, Div, FooterTag, H2, Inner, Li, Nav, Span, Ul, Paginate } from "../styledComponents";

const Footer = ({ isLogIn }) => {
    return (
        <FooterTag id="footer">
            <H2 className="blind">푸터</H2>
            <Container>
                <Inner className="inner">
                    <Div className="footer">
                        <Nav className="footer_nav">
                            <Ul className="quick_menu_list">
                                {footerNav.map((footer) => (
                                    <Li className="quick_menu_items" key={footer.text}>
                                        {footer.path === "/profile" ? (
                                            isLogIn ? (
                                                <Paginate to={footer.path} exact="true" className="quick_menu_link" activeclassname="active">
                                                    <Span className="menu_icon">{footer.icon}</Span>
                                                    <Span className="quick_menu_text">{footer.text}</Span>
                                                </Paginate>
                                            ) : (
                                                <Paginate to="/login" exact="true" className="quick_menu_link" activeclassname="active">
                                                    <Span className="menu_icon">{footer.icon}</Span>
                                                    <Span className="quick_menu_text">{footer.text}</Span>
                                                </Paginate>
                                            )
                                        ) : (
                                            <Paginate to={footer.path} exact="true" className="quick_menu_link" activeclassname="active">
                                                <Span className="menu_icon">{footer.icon}</Span>
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
