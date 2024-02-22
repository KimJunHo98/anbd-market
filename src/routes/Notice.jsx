import React from "react";
import { Container, Div, H2, Inner, Section } from "../styledComponents";

const Notice = () => {
    return (
        <Section id="notice">
            <H2 className="blind">알림</H2>
            <Container>
                <Inner>
                    <Div className="notice">Notice</Div>
                </Inner>
            </Container>
        </Section>
    );
};

export default Notice;
