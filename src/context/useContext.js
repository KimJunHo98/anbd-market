// import React, { createContext, useContext, useState, useRef, useEffect } from "react";

// const DarkModeContext = createContext();

// export const DarkModeProvider = ({ children }) => {
//     const [dark, setDark] = useState(false);
//     const skillOffsetRef = useRef(null);
//     const horizonSectionRef = useRef([]);

//     return <DarkModeContext.Provider value={{ dark, setDark, skillOffsetRef, horizonSectionRef }}>{children}</DarkModeContext.Provider>;
// };

// export const useDarkMode = () => {
//     const context = useContext(DarkModeContext);
//     if (!context) {
//         throw new Error("반드시 DarkModeProvider 안에서 사용해야 합니다.");
//     }
//     return context;
// };

// export const useScrollListener = (setWhite, skillOffsetRef) => {
//     const gap = 50;

//     const handleScroll = () => {
//         const scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
//         const skillRefOffsetTop = skillOffsetRef.current.offsetTop - gap;
//         const isDark = scrollTop >= skillRefOffsetTop;

//         setWhite((prevDark) => {
//             if (prevDark === isDark) {
//                 return prevDark;
//             }
//             return isDark;
//         });
//     };

//     useEffect(() => {
//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);
// };
