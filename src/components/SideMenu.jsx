import React, { useState } from "react";
import { useStateContext } from "../context/useStateContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { subCategoryList, slideMenuList } from "../constant";

import { Aside, Nav, Ul, Li, ALink, Button, Div, Span, P, H2, Em } from "../styledComponents";
import { IoClose } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";

const SideMenu = () => {
    const { show, setShow, isLogIn, useObj, handleMenuClick } = useStateContext();
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isServiceOpen, setIsServiceOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogOutClick = () => {
        auth.signOut();
        navigate("/login");

        setShow((prevShow) => !prevShow);
    };

    const handleCancelBtnClick = () => {
        setShow((prevShow) => !prevShow);
    };
    const handleToggleCategoryBtnClick = () => {
        setIsCategoryOpen((prevOpen) => !prevOpen);
    };
    const handleToggleServiceBtnClick = () => {
        setIsServiceOpen((prevOpen) => !prevOpen);
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
                <Nav className="menu_nav">
                    <Ul className="menu_wrap">
                        <Li className="menu_item">
                            <Button className="toggle_button" onClick={handleToggleCategoryBtnClick}>
                                <Span className="item_title">카테고리</Span>
                                {isCategoryOpen ? (
                                    <Em className="item_icon">
                                        <FaMinus />
                                    </Em>
                                ) : (
                                    <Em className="item_icon">
                                        <FaPlus />
                                    </Em>
                                )}
                            </Button>
                            <Ul className={`menu_depth ${isCategoryOpen ? "open" : ""}`}>
                                {subCategoryList.map((item) => (
                                    <Li key={item.text} className="depth_item">
                                        <ALink to={`/product/subcategory/${item.value}`} onClick={handleMenuClick} className="depth_link">
                                            {item.text}
                                        </ALink>
                                    </Li>
                                ))}
                            </Ul>
                        </Li>
                        <Li className="menu_item">
                            <Button className="toggle_button" onClick={handleToggleServiceBtnClick}>
                                <Span className="item_title">고객센터</Span>
                                {isServiceOpen ? (
                                    <Em className="item_icon">
                                        <FaMinus />
                                    </Em>
                                ) : (
                                    <Em className="item_icon">
                                        <FaPlus />
                                    </Em>
                                )}
                            </Button>
                            <Ul className={`menu_depth ${isServiceOpen ? "open" : ""}`}>
                                {slideMenuList.map((item) => (
                                    <Li key={item.text} className="depth_item">
                                        <Span className="depth_text">{item.text}</Span>
                                    </Li>
                                ))}
                            </Ul>
                        </Li>
                        <Li className="menu_item">
                            <Span className="item_title">이벤트</Span>
                        </Li>
                    </Ul>
                </Nav>
            </Div>
        </Aside>
    );
};

export default SideMenu;
