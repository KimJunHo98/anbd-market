import React from "react";
import { useStateContext } from "../context/useStateContext";
import { Container, Div, H2, Icon, Inner, P, Section } from "../styledComponents";
import { FaUserCircle } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

const Profile = () => {
    const { useObj } = useStateContext();

    return (
        <Section id="profile">
            <H2 className="blind">프로필</H2>
            <Container>
                <Inner>
                    <Div className="profile">
                        <Div className="my_profile">
                            <Div className="my_profile_thumb">
                                <Icon className="thumb">
                                    <FaUserCircle />
                                </Icon>
                                <P className="nick_name">{useObj.displayName} 님</P>
                            </Div>
                            <Icon className="setting">
                                <IoIosSettings />
                            </Icon>
                        </Div>
                    </Div>
                </Inner>
            </Container>
        </Section>
    );
};

export default Profile;
