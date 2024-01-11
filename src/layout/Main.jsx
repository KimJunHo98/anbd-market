import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainTag } from "../styledComponents";

import Home from "../routes/Home";
import Signup from "../routes/Signup";
import Login from "../routes/Login";
import Profile from "../routes/Profile";
import ProtectedRoute from "../components/ProtectedRoute";

const Main = ({ setShow, isLogIn }) => {
    return (
        <MainTag>
            <Routes>
                {isLogIn ? (
                    <>
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
                                    <Profile setShow={setShow} />
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
            </Routes>
        </MainTag>
    );
};

export default Main;
