import React from "react";
import { useStateContext } from "../context/useStateContext";
import { Container, Div, H2, H3, Inner, Section } from "../styledComponents";
import Login from "./Login";

const Notice = () => {
    const { isLogIn } = useStateContext();

    return (
        <>
            {isLogIn ? (
                <Section id="notice">
                    <H2 className="blind">알림</H2>
                    <Container>
                        <Inner>
                            <Div className="notice">
                                <H3 className="notice_title">My 알림</H3>
                            </Div>
                        </Inner>
                    </Container>
                </Section>
            ) : (
                <Login />
            )}
        </>
    );
};

export default Notice;
