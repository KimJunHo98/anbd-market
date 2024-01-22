// GlobalStyles.js
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    @charset "UTF-8";

    :root {
        --main-font: "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", helvetica, sans-serif;
        --main-color: #222;
        --Kor-font: "Noto Sans KR";
        --Eng-font: "Apple SD Gothic Neo";
        --primary-color: #74BF04;
        --secondary-color: #558C03;
        --accent-color: #93F205;
    }

    * {
        margin: 0;
        padding: 0;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%; /* 1rem = 10px */
    }

    body {
        background-color: #eee;
        color: var(--main-color);
    }

    body, input, textarea, select, option, button, table {
        font-family: var(--main-font);
    }

    input, textarea, button, select, option {
        outline: 0 none;
        border: 0 none;
    }

    // 링크 초기화
    a, a:hover, a:focus {
        color: var(--main-color);
        text-decoration: none;
    }

    // 스타일 초기화
    ul, li, ol {
        list-style: none;
    }
    em, address {
        font-style: normal;
    }
    button {
        border: 0;
    }

    // 테두리 초기화
    img, fieldset {
        border: 0 none;
    }

    // 반응형 이미지
    img, video {
        width: 100%;
    }

    // IR 효과
    .blind {
        overflow: hidden;
        position: absolute;
        width: 0;
        height: 0;
        line-height: 0;
        text-indent: -9999px;
    }
    .ir_pm {
        display: block;
        overflow: hidden;
        font-size: 0;
        line-height: 0;
        text-indent: -9999px;
    }
    .ir_wa {
        display: block;
        overflow: hidden;
        position: relative;
        z-index: -1;
        width: 100%;
        height: 100%;
    }

    // 미디어쿼리
    @media all and (min-width: 1024px) and (max-width: 1440px) {
        
    }
    @media all and (min-width: 768px) and (max-width: 1023px) {
        
    }
    @media all and (max-width: 767px) {
        
    }
    @media all and (max-width: 480px) {
        
    }
`;

export default GlobalStyles;
