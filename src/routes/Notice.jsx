import React from "react";
import { Container, Div, H2, Inner, Section } from "../styledComponents";

const Notice = () => {
    return (
        <Section>
            <H2 className="blind">알림</H2>
            <Container>
                <Inner>
                    <Div>Notice</Div>
                </Inner>
            </Container>
        </Section>
    );
};

export default Notice;
