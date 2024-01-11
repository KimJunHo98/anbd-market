import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Div, P } from "../styledComponents";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Main from "../layout/Main";
import SideMenu from "./SideMenu";

const AppRouter = ({ isLoading }) => {
    const [show, setShow] = useState(false);

    const handleMenuClick = () => {
        setShow((prevShow) => !prevShow);
    };

    return (
        <BrowserRouter>
            <Header handleMenuClick={handleMenuClick} />
            <SideMenu show={show} setShow={setShow} />
            {!isLoading ? (
                <Main />
            ) : (
                <Div className="loading">
                    <P>loading...</P>
                </Div>
            )}
            <Footer />
        </BrowserRouter>
    );
};

export default AppRouter;
