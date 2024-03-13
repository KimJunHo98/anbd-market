import React, { useState } from "react";
import { useStateContext } from "../context/useStateContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { subCategoryList, slideMenuList } from "../constant";

import { Aside, Nav, Ul, Li, ALink, Button, Div, Span, P, H2, HeaderTag, Icon } from "../styledComponents";
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
        <Aside id="side_menu" className={`${show ? "show" : ""}`} role="complementary">
            <H2 className="blind">사이드 메뉴</H2>
            <Div className="side_menu_wrap">
                <HeaderTag className="side_menu_header">
                    <Button className="cancel_btn" onClick={handleCancelBtnClick} role="button" aria-label="닫기">
                        <Icon className="cancel_icon" aria-hidden="true">
                            <IoClose />
                        </Icon>
                    </Button>
                    {isLogIn ? (
                        <Button className="logut_btn" onClick={handleLogOutClick} role="button" aria-label="로그아웃 하기">
                            로그아웃
                        </Button>
                    ) : (
                        <Ul className="menu_account">
                            <Li className="account_list">
                                <ALink
                                    to="/login"
                                    className="account_link"
                                    onClick={() => setShow((prevShow) => !prevShow)}
                                    role="link"
                                    aria-label="로그인 페이지로 이동"
                                >
                                    로그인
                                </ALink>
                            </Li>
                            <Li className="account_list">
                                <ALink
                                    to="/signup"
                                    className="account_link"
                                    onClick={() => setShow((prevShow) => !prevShow)}
                                    role="link"
                                    aria-label="회원가입 페이지로 이동"
                                >
                                    회원가입
                                </ALink>
                            </Li>
                        </Ul>
                    )}
                </HeaderTag>
                {isLogIn && (
                    <Div className="my_page">
                        <Div className="my_page_items">
                            <Icon className="thumb" aria-hidden="true">
                                <FaUserCircle />
                            </Icon>
                            <P className="nick_name">{useObj.displayName} 님</P>
                        </Div>
                    </Div>
                )}
                <Nav className="menu_nav" role="navigation">
                    <Ul className="menu_wrap">
                        <Li className="menu_item">
                            <Button
                                className="toggle_button"
                                onClick={handleToggleCategoryBtnClick}
                                role="button"
                                aria-label="카테고리 목록 열기"
                            >
                                <Span className="item_title">카테고리</Span>
                                {isCategoryOpen ? (
                                    <Icon className="item_icon" aria-hidden="true">
                                        <FaMinus />
                                    </Icon>
                                ) : (
                                    <Icon className="item_icon" aria-hidden="true">
                                        <FaPlus />
                                    </Icon>
                                )}
                            </Button>
                            <Ul className={`menu_depth ${isCategoryOpen ? "open" : ""}`}>
                                {subCategoryList.map((item) => (
                                    <Li key={item.text} className="depth_item">
                                        <ALink
                                            to={`/product/subcategory/${item.value}`}
                                            onClick={handleMenuClick}
                                            className="depth_link"
                                            role="link"
                                            aria-label={`${item.text} 카테고리로 이동`}
                                        >
                                            {item.text}
                                        </ALink>
                                    </Li>
                                ))}
                            </Ul>
                        </Li>
                        <Li className="menu_item">
                            <Button className="toggle_button" onClick={handleToggleServiceBtnClick} role="button" aria-label="고객센터">
                                <Span className="item_title">고객센터</Span>
                                {isServiceOpen ? (
                                    <Icon className="item_icon" aria-hidden="true">
                                        <FaMinus />
                                    </Icon>
                                ) : (
                                    <Icon className="item_icon" aria-hidden="true">
                                        <FaPlus />
                                    </Icon>
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
