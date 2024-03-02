import React from "react";
import { Div, Img } from "../styledComponents";

const Splash = () => {

    return (
        <Div id="splash">
            <Img src={process.env.PUBLIC_URL + "/images/splash.svg"} alt="로고 스플래쉬 이미지" className="splash_img" />
        </Div>
    );
};

export default Splash;
