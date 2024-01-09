import React from "react";
import { AsideMenu, Nav, CancelBtn, Ul, Li, ALink } from "../styledComponents";

import { BsXLg } from "react-icons/bs";

const SideMenu = ({ show, setShow }) => {
    const hanleCancelBtnClick = () => {
        setShow((prevShow) => !prevShow);
    };

    return (
        <AsideMenu className={`${show ? "show" : ""}`}>
            <CancelBtn className="cancel_btn" onClick={hanleCancelBtnClick}>
                <BsXLg />
            </CancelBtn>
            <Nav>
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
        </AsideMenu>
    );
};

export default SideMenu;
