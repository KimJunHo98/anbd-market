import React from "react";
import { Container, Div, H2, Inner, P, Section } from "../styledComponents";

const Profile = ({useObj}) => {
    return (
        <Section id="profile">
            <H2 className="blind">프로필</H2>
            <Container>
                <Inner>
                    <Div className="profile">
                        <Div className="my_profile">
                            <P className="nick_name">{useObj.displayName} 님</P>
                        </Div>
                    </Div>
                </Inner>
            </Container>
        </Section>
    );
};

export default Profile;
