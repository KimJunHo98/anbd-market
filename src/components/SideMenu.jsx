import React from "react";
import { Aside, Nav, Ul, Li, ALink, Button, Div, Span, P } from "../styledComponents";

import { BsXLg } from "react-icons/bs";

const SideMenu = ({ show, setShow, isLogIn, useObj }) => {
    const handleCancelBtnClick = () => {
        setShow((prevShow) => !prevShow);
    };
    console.log(useObj);

    return (
        <Aside id="side_menu" className={`${show ? "show" : ""}`}>
            <Button className="cancel_btn" onClick={handleCancelBtnClick}>
                <BsXLg />
            </Button>
            <Nav className="menu_nav">
                {isLogIn ? (
                    <Div className="my_page">
                        <Div className="my_page_items">
                            <Span className="thumb"></Span>
                            <P className="nick_name">{useObj.displayName} 님</P>
                        </Div>
                        <ALink to="/profile" className="profile_link">
                            마이 페이지
                        </ALink>
                    </Div>
                ) : (
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
                )}
            </Nav>
        </Aside>
    );
};

export default SideMenu;
