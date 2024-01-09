import React from "react";
import { Container, Div, FooterTag, H2, Inner } from "../styledComponents";

const Footer = () => {
    return (
        <FooterTag id="footer">
            <H2 className="blind">푸터</H2>
            <Container>
                <Inner>
                    <Div className="footer" style={{padding: "50px 0"}}>
                        푸터
                    </Div>
                </Inner>
            </Container>
        </FooterTag>
    );
};

export default Footer;
