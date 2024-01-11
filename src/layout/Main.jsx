import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainTag } from "../styledComponents";

import Home from "../routes/Home";
import Signup from "../routes/Signup";
import Login from "../routes/Login";
import Profile from "../routes/Profile";
import ProtectedRoute from "../components/ProtectedRoute";

const Main = () => {
    return (
        <MainTag>
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </MainTag>
    );
};

export default Main;
