import React from "react";
import { useStateContext } from "../context/useStateContext";
import { Container, Div, H2, Inner, P, Section } from "../styledComponents";

const Profile = () => {
    const { useObj } = useStateContext();

    return (
        <Section id="profile">
            <H2 className="blind">프로필</H2>
            <Container>
                <Inner>
                    <Div className="profile">
                        <Div className="my_profile">
                            <P className="nick_name">{useObj.displayName} 님</P>
                            구매내역
                        </Div>
                    </Div>
                </Inner>
            </Container>
        </Section>
    );
};

export default Profile;
