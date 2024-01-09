import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainTag } from "../styledComponents";

import Home from "./Home";
import Signup from "../components/Signup";
import Login from "../components/Login";

const Main = () => {
    return (
        <MainTag>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </MainTag>
    );
};

export default Main;
