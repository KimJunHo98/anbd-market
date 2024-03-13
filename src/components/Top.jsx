import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useStateContext } from "../context/useStateContext";

import { Aside, Button, H2 } from "../styledComponents";
import { FaArrowUp } from "react-icons/fa6";

const Top = () => {
    const { isLogIn } = useStateContext();
    const [prevScroll, setPrevScroll] = useState(0);
    const topBtnRef = useRef(null);
    const location = useLocation("");
    const isDetail = location.pathname.includes("/detail");

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const windowHeight = topBtnRef.current.offsetHeight;

            if (prevScroll > currentScroll || currentScroll < windowHeight) {
                // 스크롤을 올리거나 페이지 상단에 위치할 때
                topBtnRef.current.classList.add("hide");
                topBtnRef.current.classList.remove("show");
            } else {
                // 스크롤을 내릴 때
                topBtnRef.current.classList.remove("hide");
                topBtnRef.current.classList.add("show");
            }

            setPrevScroll(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScroll]);

    const handleTopBtnClick = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <Aside
            id="top_btn"
            className={`hide ${isDetail ? "isDetail" : ""} ${isLogIn ? "isLogin" : ""}`}
            ref={topBtnRef}
            role="complementary"
        >
            <H2 className="blind">상단 이동 버튼</H2>
            <Button type="button" onClick={handleTopBtnClick} className="top_btn" role="button" aria-label="상단으로 이동">
                <FaArrowUp aria-hidden="true" />
            </Button>
        </Aside>
    );
};

export default Top;
