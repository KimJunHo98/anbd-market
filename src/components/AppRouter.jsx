import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Loading } from "../styledComponents";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Main from "../layout/Main";

const AppRouter = ({ isloading }) => {
    return (
        <BrowserRouter>
            <Header />
            {!isloading ? <Main /> : <Loading><p>loading...</p></Loading>}
            <Footer />
        </BrowserRouter>
    );
};

export default AppRouter;
