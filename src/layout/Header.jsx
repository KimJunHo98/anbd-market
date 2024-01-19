import React from "react";
import { useStateContext } from "../context/useStateContext";
import { H2, ALink, H1, HeaderTag, Container, Inner, Div, Img, Button, Span } from "../styledComponents";

const Header = () => {
    const { handleMenuClick } = useStateContext();

    return (
        <HeaderTag id="header">
            <H2 className="blind">헤더</H2>
            <Container>
                <Inner className="inner">
                    <Div className="header">
                        <H1>
                            <ALink to="/" className="header_link">
                                <Img src="/images/header/main_logo.png" alt="메인로고" className="logo_img" />
                            </ALink>
                        </H1>
                        <Button onClick={handleMenuClick} className="menu_btn">
                            <Span className="bar" />
                        </Button>
                    </Div>
                </Inner>
            </Container>
        </HeaderTag>
    );
};

export default Header;
