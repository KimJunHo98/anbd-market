import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useStateContext } from "../context/useStateContext";
import { Div, P } from "../styledComponents";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Main from "../layout/Main";
import SideMenu from "./SideMenu";
import Splash from "./Splash";

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
                            <P>loading...</P>
                        </Div>
                    )}
                    <Footer />
                </BrowserRouter>
            )}
        </>
    );
};

export default AppRouter;
