import React from "react";
import { Aside, Nav, Ul, Li, ALink, Button } from "../styledComponents";

import { BsXLg } from "react-icons/bs";

const SideMenu = ({ show, setShow }) => {
    const hanleCancelBtnClick = () => {
        setShow((prevShow) => !prevShow);
    };

    return (
        <Aside id="side_menu" className={`${show ? "show" : ""}`}>
            <Button className="cancel_btn" onClick={hanleCancelBtnClick}>
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
            </Nav>
        </Aside>
    );
};

export default SideMenu;
