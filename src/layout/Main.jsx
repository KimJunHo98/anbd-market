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
import Product from "../components/product/Product";
import UploadForm from "../routes/UploadForm";

const Main = ({ setShow, isLogIn, useObj, sell, setSell }) => {
    return (
        <MainTag>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
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
                <Route path="/upload" element={<UploadForm sell={sell} setSell={setSell} />} />
            </Routes>
        </MainTag>
    );
};

export default Main;
