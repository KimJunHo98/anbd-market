import { Link } from "react-router-dom";
import { styled } from "styled-components";

// 로딩
export const Loading = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;

    p {
        width: 100%;
        max-width: 480px;
        padding-top: 30px;
        text-align: center;
        font-size: 2rem;
        background-color: #fff;
    }
`;

// 헤더
export const MainLogo = styled.h1`
    margin: 0 auto;
    transform: translateX(30px);
`;
export const HeaderLink = styled(Link)`
    width: 90%;
    display: block;
`;
export const MenuBtn = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    transition: all 0.3s ease-in;
    background-color: #fff;
    cursor: pointer;

    &:hover {
        background-color: #eee;
    }

    .bar {
        width: 20px;
        height: 2px;
        position: relative;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        background-color: #222;

        &:after,
        &:before {
            content: "";
            width: 24px;
            height: 2px;
            position: absolute;
            left: 0;
            background-color: #222;
        }
        &:after {
            bottom: 8px;
        }
        &:before {
            top: 8px;
        }
    }
`;

// 회원가입&로그인
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
`;
export const Input = styled.input`
    width: 100%;
    padding: 10px 0px 10px 10px;
    margin-bottom: 15px;
    outline: 0 none;
    border-radius: 10px;
    border: 1px solid #999;
`;
export const Label = styled.label`
    overflow: hidden;
    position: absolute;
    width: 0;
    height: 0;
    line-height: 0;
    text-indent: -9999px;
`;
export const BtnInput = styled.input`
    width: 100%;
    padding: 10px 0px 10px 10px;
    outline: 0 none;
    border-radius: 10px;
    border: 1px solid #999;
    cursor: pointer;
`;
export const MoveSection = styled.div`
    display: flex;
    padding: 0 20px;
    margin-top: 20px;

    p {
        color: #666;
    }
`;
export const MoveBtn = styled(Link)`
    margin-left: 10px;
    font-weight: 600;
    text-decoration: underline;

    &:hover {
        text-decoration: underline;
    }
`;
