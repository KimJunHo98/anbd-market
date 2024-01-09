import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Loading } from "../styledComponents";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Main from "../layout/Main";
import SideMenu from "./SideMenu";

const AppRouter = ({ isloading }) => {
    const [show, setShow] = useState(false);

    const handleMenuClick = () => {
        setShow(prevShow => !prevShow);
    }

    return (
        <BrowserRouter>
            <Header handleMenuClick={handleMenuClick} />
            <SideMenu show={show} setShow={setShow} />
            {!isloading ? <Main /> : <Loading><p>loading...</p></Loading>}
            <Footer />
        </BrowserRouter>
    );
};

export default AppRouter;
