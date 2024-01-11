import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { Aside, Nav, Ul, Li, ALink, Button } from "../styledComponents";

import { BsXLg } from "react-icons/bs";

const SideMenu = ({ show, setShow }) => {
    const navigate = useNavigate();

    const handleCancelBtnClick = () => {
        setShow((prevShow) => !prevShow);
    }
    ;
    const handleLogOutClick = () => {
        auth.signOut();
        setShow((prevShow) => !prevShow);

        navigate("/login");
    }

    return (
        <Aside id="side_menu" className={`${show ? "show" : ""}`}>
            <Button className="cancel_btn" onClick={handleCancelBtnClick}>
                <BsXLg />
            </Button>
            <Nav className="menu_nav">
                <Ul className="menu_account">
                    <Li className="account_list">
                        <ALink to="/login" className="account_link" onClick={() => setShow((prevShow) => !prevShow)}>
                            로그인
                        </ALink>
                    </Li>
                    <Li className="account_list">
                        <ALink to="/signup" className="account_link" onClick={() => setShow((prevShow) => !prevShow)}>
                            회원가입
                        </ALink>
                    </Li>
                </Ul>
                <Button className="logut_btn" onClick={handleLogOutClick}>로그아웃</Button>
            </Nav>
        </Aside>
    );
};

export default SideMenu;
