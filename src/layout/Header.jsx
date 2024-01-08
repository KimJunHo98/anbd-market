import React from "react";
import { HeaderLink, MainLogo, MenuBtn } from "../styledComponents";

const Header = () => {
    return (
        <header id="header">
            <h2 className="blind">헤더</h2>
            <div className="container">
                <div className="inner">
                    <div className="header">
                        <MainLogo>
                            <HeaderLink>
                                <img src="/images/header/main_logo.png" alt="메인로고" />
                            </HeaderLink>
                        </MainLogo>
                        <MenuBtn>
                            <span className="bar"></span>
                        </MenuBtn>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
