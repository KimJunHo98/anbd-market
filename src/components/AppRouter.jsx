import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Div, P } from "../styledComponents";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Main from "../layout/Main";
import SideMenu from "./SideMenu";
import Splash from "./Splash";

const AppRouter = ({ isLoading, useObj, isLogIn }) => {
    const [show, setShow] = useState(false);

    const handleMenuClick = () => {
        setShow((prevShow) => !prevShow);
    };

    return (
        <BrowserRouter>
            {isLoading && <Splash />}
            <Header handleMenuClick={handleMenuClick} />
            <SideMenu show={show} setShow={setShow} isLogIn={isLogIn} useObj={useObj} />
            {!isLoading ? (
                <Main setShow={setShow} isLogIn={isLogIn} useObj={useObj} />
            ) : (
                <Div className="loading">
                    <P>loading...</P>
                </Div>
            )}
            <Footer isLogIn={isLogIn} />
        </BrowserRouter>
    );
};

export default AppRouter;
