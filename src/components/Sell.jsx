import React from "react";
import { useStateContext } from "../context/useStateContext";
import { useLocation } from "react-router-dom";

import { ALink, Aside, Div, H2 } from "../styledComponents";
import { FaPlus } from "react-icons/fa6";

const Sell = () => {
    const { isLogIn } = useStateContext();
    const location = useLocation("");

    const isDetail = location.pathname.includes("/detail");

    return (
        <>
            {!isDetail && isLogIn ? (
                <Aside id="sell">
                    <H2 className="blind">내 물건 팔기</H2>
                    <Div className="sell">
                        <ALink to="/upload" className="sell_link">
                            <FaPlus className="sell_icon" /> 팔기
                        </ALink>
                    </Div>
                </Aside>
            ) : null}
        </>
    );
};

export default Sell;
