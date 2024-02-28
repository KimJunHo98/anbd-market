import React, { useEffect, useRef, useState } from "react";
import { useStateContext } from "../context/useStateContext";

import { Aside, Button, H2 } from "../styledComponents";
import { FaArrowUp } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const Top = () => {
    const { isLogIn } = useStateContext();
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const topBtnRef = useRef(null);
    const location = useLocation("");

    const isDetail = location.pathname.includes("/detail");
    
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const windowHeight = topBtnRef.current.offsetHeight;

            if (prevScrollPos > currentScrollPos || currentScrollPos < windowHeight) {
                // 스크롤을 올리거나 페이지 상단에 위치할 때
                topBtnRef.current.classList.add("hide");
                topBtnRef.current.classList.remove("show");
            } else {
                // 스크롤을 내릴 때
                topBtnRef.current.classList.remove("hide");
                topBtnRef.current.classList.add("show");
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    const handleTopBtnClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isLogIn ? (
                <Aside id="top_btn" className={`hide ${isDetail ? "isDetail" : ""}`} ref={topBtnRef}>
                    <H2 className="blind">상단 이동 버튼</H2>
                    <Button type="button" onClick={handleTopBtnClick} className="top_btn">
                        <FaArrowUp />
                    </Button>
                </Aside>
            ) : null}
        </>
    );
};

export default Top;
