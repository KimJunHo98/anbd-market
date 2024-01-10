import React from "react";
import { Container, Div, FooterTag, H2, Inner, P } from "../styledComponents";

const Footer = () => {
    return (
        <FooterTag id="footer">
            <H2 className="blind">푸터</H2>
            <Container>
                <Inner>
                    <Div className="footer">
                        <P className="copyright">KimJunHo &copy; {new Date().getFullYear()} ANBD</P>
                    </Div>
                </Inner>
            </Container>
        </FooterTag>
    );
};

export default Footer;
