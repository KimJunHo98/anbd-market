import React from "react";
import { Aside, Nav, Ul, Li, ALink, Button, Div, Span, P, H2 } from "../styledComponents";

import { IoClose } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const SideMenu = ({ show, setShow, isLogIn, useObj }) => {
    const navigate = useNavigate();

    const handleLogOutClick = () => {
        auth.signOut(); 
        navigate("/login");

        setShow((prevShow) => !prevShow);
    };

    const handleCancelBtnClick = () => {
        setShow((prevShow) => !prevShow);
    };

    return (
        <Aside id="side_menu" className={`${show ? "show" : ""}`}>
            <H2 className="blind">사이드 메뉴</H2>
            <Div className="side_menu_wrap">
                <Div className="side_menu_header">
                    <Button className="cancel_btn" onClick={handleCancelBtnClick}>
                        <IoClose />
                    </Button>
                    {isLogIn ? (
                        <Button className="logut_btn" onClick={handleLogOutClick}>
                            로그아웃
                        </Button>
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
                </Div>
                <Nav className="menu_nav">
                    {isLogIn && (
                        <Div className="my_page">
                            <Div className="my_page_items">
                                <Span className="thumb">
                                    <FaUserCircle />
                                </Span>
                                <P className="nick_name">{useObj.displayName} 님</P>
                            </Div>
                        </Div>
                    )}
                </Nav>
            </Div>
        </Aside>
    );
};

export default SideMenu;
