import React from "react";
import { Container, Div, H2, Inner, Section } from "../styledComponents";

const Banner = () => {
    return (
        <Section id="banner">
            <H2 className="blind">배너 영역</H2>
            <Container>
                <Inner>
                    <Div className="banner">
                        banner
                    </Div>
                </Inner>
            </Container>
        </Section>
    );
};

export default Banner;
