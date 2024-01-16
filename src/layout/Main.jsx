import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainTag } from "../styledComponents";

import Home from "../routes/Home";
import Signup from "../routes/Signup";
import Login from "../routes/Login";
import Profile from "../routes/Profile";
import ProtectedRoute from "../components/ProtectedRoute";
import Category from "../routes/Category";
import Notice from "../routes/Notice";
import Mypick from "../routes/Mypick";

const Main = ({ setShow, isLogIn, useObj }) => {
    return (
        <MainTag>
            <Routes>
                <Route path="/" element={<Home />} />
                {isLogIn ? (
                    <>
                        <Route
                            path="/profile"
                            element={
                                <ProtectedRoute>
                                    <Profile setShow={setShow} useObj={useObj} />
                                </ProtectedRoute>
                            }
                        />
                    </>
                ) : (
                    <>
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                    </>
                )}
                <Route path="/category" element={<Category />} />
                <Route path="/mypick" element={<Mypick />} />
                <Route path="/notice" element={<Notice />} />
            </Routes>
        </MainTag>
    );
};

export default Main;
