import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const StateContext = createContext({
    useObj: null,
    isLoading: true,
    isLogIn: false,
    show: false,
    detailTopVisible: false,
    setDetailTopVisible: () => {},
    setShow: () => {},
    handleMenuClick: () => {},
});

export const StateProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [useObj, setUseObj] = useState(null);
    const [show, setShow] = useState(false);
    const [detailTopVisible, setDetailTopVisible] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUseObj(user);
            } else {
                setUseObj(null);
            }
        });

        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => {
            clearTimeout(timeoutId);
            unsubscribe();
        };
    }, []);

    const isLogIn = Boolean(useObj);

    const handleMenuClick = () => {
        setShow((prevShow) => !prevShow);
    };

    return (
        <StateContext.Provider value={{ useObj, isLoading, isLogIn, show, setShow, handleMenuClick, detailTopVisible, setDetailTopVisible }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => {
    const context = useContext(StateContext);
    if (!context) {
        throw new Error("반드시 StateProvider 안에서 사용해야 합니다.");
    }
    return context;
};
