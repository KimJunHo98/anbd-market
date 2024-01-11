import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { Button } from "../styledComponents";

const Profile = ({ setShow }) => {
    const navigate = useNavigate();

    const handleLogOutClick = () => {
        auth.signOut().then(() => navigate("/login"));

        setShow((prevShow) => !prevShow);
    };
    
    return (
        <div>
            <Button className="logut_btn" onClick={handleLogOutClick}>
                로그아웃
            </Button>
        </div>
    );
};

export default Profile;
