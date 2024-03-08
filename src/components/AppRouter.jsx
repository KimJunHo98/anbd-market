import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useStateContext } from "../context/useStateContext";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Main from "../layout/Main";
import SideMenu from "./SideMenu";
import Splash from "./Splash";

import { Div, P } from "../styledComponents";

const AppRouter = () => {
    const { isLoading } = useStateContext();

    return (
        <>
            {isLoading ? (
                <Splash />
            ) : (
                <BrowserRouter>
                    <Header />
                    <SideMenu />
                    {!isLoading ? (
                        <Main />
                    ) : (
                        <Div className="loading">
                            <P>로딩 중...</P>
                        </Div>
                    )}
                    <Footer />
                </BrowserRouter>
            )}
        </>
    );
};

export default AppRouter;
