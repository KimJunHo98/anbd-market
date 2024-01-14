import React from "react";
import { Container, Div, H2, Inner, P, Section, Span } from "../styledComponents";
import { FaUserCircle } from "react-icons/fa";

const Profile = ({useObj}) => {
    return (
        <Section id="profile">
            <H2 className="blind">프로필</H2>
            <Container>
                <Inner>
                    <Div className="profile">
                        <Div className="my_profile">
                            <Span className="thumb">
                                <FaUserCircle />
                            </Span>
                            <P className="nick_name">{useObj.displayName} 님</P>
                        </Div>
                    </Div>
                </Inner>
            </Container>
        </Section>
    );
};

export default Profile;
