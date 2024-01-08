import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignUp from "../components/SignUp";
import Login from "../components/Login";

const Main = () => {
    return (
        <main id="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </main>
    );
};

export default Main;
