import React from "react";
import { Container, Div, H2, Inner, Section } from "../styledComponents";

const Receipt = () => {
    return (
        <Section id="receipt">
            <H2 className="blind">구매내역</H2>
            <Container>
                <Inner>
                    <Div className="receipt">receipt</Div>
                </Inner>
            </Container>
        </Section>
    );
};

export default Receipt;
