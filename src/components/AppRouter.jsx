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
    const [sell, setSell] = useState(false);

    const handleMenuClick = () => {
        setShow((prevShow) => !prevShow);
    };


    const handleSellClick = () => {
        setSell(prevSell => !prevSell);
    }

    return (
        <>
            {isLoading ? (
                <Splash />
            ) : (
                <BrowserRouter>
                    <Header handleMenuClick={handleMenuClick} />
                    <SideMenu show={show} setShow={setShow} isLogIn={isLogIn} useObj={useObj} />
                    {!isLoading ? (
                        <Main setShow={setShow} isLogIn={isLogIn} useObj={useObj} sell={sell} setSell={setSell} />
                    ) : (
                        <Div className="loading">
                            <P>loading...</P>
                        </Div>
                    )}
                    <Footer isLogIn={isLogIn} sell={sell} handleSellClick={handleSellClick} />
                </BrowserRouter>
            )}
        </>
    );
};

export default AppRouter;
