import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { auth } from "../firebase";

const StateContext = createContext({
    useObj: null,
    isLoading: true,
    isLogIn: false,
    show: false,
    setShow: () => {},
    handleMenuClick: () => {},
    isDetailTopVisible: false,
    detailTopRef: (null)
});

export const StateProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [useObj, setUseObj] = useState(null);
    const [show, setShow] = useState(false);
    const [isDetailTopVisible, setDetailTopVisible] = useState(false);
    const detailTopRef = useRef(null);

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

    useEffect(() => {
        const detailTop = detailTopRef.current;
        console.log("DetailTopRef in handleScroll:", detailTop);
        
        if (detailTop) {
            const handleScroll = () => {
                const offsetTop = detailTop.offsetTop + 60;
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
                const triggerOffset = offsetTop;
                
                setDetailTopVisible(scrollTop >= triggerOffset);
            };
            
            window.addEventListener("scroll", handleScroll);
            
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);
    
    // console.log(detailTopRef);

    const isLogIn = Boolean(useObj);

    const handleMenuClick = () => {
        setShow((prevShow) => !prevShow);
    };

    return (
        <StateContext.Provider value={{ useObj, isLoading, isLogIn, show, setShow, handleMenuClick, isDetailTopVisible, detailTopRef }}>
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
