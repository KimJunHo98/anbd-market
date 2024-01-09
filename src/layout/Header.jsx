import React from "react";
import { Btnbar, H2, ALink, H1, MenuBtn, HeaderTag, Container, Inner, Div, Img } from "../styledComponents";

const Header = ({ handleMenuClick }) => {
    return (
        <HeaderTag id="header">
            <H2 className="blind">헤더</H2>
            <Container>
                <Inner>
                    <Div className="header">
                        <H1>
                            <ALink to="/" className="header_link">
                                <Img src="/images/header/main_logo.png" alt="메인로고" className="logo_img" />
                            </ALink>
                        </H1>
                        <MenuBtn onClick={handleMenuClick}>
                            <Btnbar />
                        </MenuBtn>
                    </Div>
                </Inner>
            </Container>
        </HeaderTag>
    );
};

export default Header;
