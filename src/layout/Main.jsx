import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useStateContext } from "../context/useStateContext";
import { MainTag } from "../styledComponents";

import Home from "../routes/Home";
import Signup from "../routes/Signup";
import Login from "../routes/Login";
import Profile from "../routes/Profile";
import Category from "../routes/Category";
import Notice from "../routes/Notice";
import Mypick from "../routes/Mypick";
import Product from "../routes/Product";
import UploadForm from "../routes/UploadForm";
import Detail from "../routes/Detail";
import Receipt from "../routes/Receipt";
import ProtectedRoute from "../components/ProtectedRoute";

const Main = () => {
    const { isLogIn } = useStateContext();
    const location = useLocation();
    const isDetailPage = location.pathname.includes("/detail");

    return (
        <MainTag style={{paddingTop: `${!isDetailPage ? "173.5px" : "60px"}`}}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/product/:category" element={<Category />} />
                <Route path="/product/detail/:id/*" element={<Detail />} />
                {isLogIn ? (
                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute>
                                <Profile />
                            </ProtectedRoute>
                        }
                    />
                ) : (
                    <>
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                    </>
                )}
                <Route path="/receipt" element={<Receipt />} />
                <Route path="/mypick" element={<Mypick />} />
                <Route path="/notice" element={<Notice />} />
                <Route path="/upload" element={<UploadForm />} />
            </Routes>
        </MainTag>
    );
};

export default Main;
