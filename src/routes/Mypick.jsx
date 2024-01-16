import React from "react";
import { Container, Div, H2, Inner, Section } from "../styledComponents";

const Mypick = () => {
    return (
        <Section>
            <H2 className="blind">찜</H2>
            <Container>
                <Inner>
                    <Div>Mypick</Div>
                </Inner>
            </Container>
        </Section>
    );
};

export default Mypick;
