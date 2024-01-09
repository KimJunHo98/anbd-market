import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-width: 480px;
    margin: 0 auto;
`;
export const Inner = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 20px;
    background-color: #fff;
`;

// h1 ~ h6 태그
export const H1 = styled.h1`
    margin: 0 auto;
    transform: translateX(30px);
`;
export const H2 = styled.h2``;
export const H3 = styled.h3`
    &.signup_title {
        margin-bottom: 30px;
        text-align: center;
        font-size: 2rem;
    }
    &.login_title {
        margin-bottom: 30px;
        text-align: center;
        font-size: 2rem;
    }
`;

// 시멘틱 태그
export const Section = styled.section``;
export const HeaderTag = styled.header``;
export const FooterTag = styled.footer``;
export const MainTag = styled.main`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
`;

export const Ul = styled.ul`
    &.menu_account {
        width: 60%;
        display: flex;
        margin-top: 30px;
    }
`;
export const Li = styled.li`
    &.account_list {
        margin-right: 10px;
        border: 1px solid #111;
    }
`;
export const ALink = styled(Link)`
    &.header_link {
        width: 90%;
        display: block;
    }
    &.account_link {
        width: 100px;
        display: block;
        padding: 8px 0;
        text-align: center;
        font-size: 1.6rem;
    }
`;
export const Img = styled.img``;

// div 태그
export const Div = styled.div`
    &.header {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    &.banner {
        width: 100%;
    }

    &.signup {
        width: 100%;
        height: calc(100vh - 60px);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    &.login {
        width: 100%;
        height: calc(100vh - 60px);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;
export const P = styled.p``;

// 로딩
export const Loading = styled.div`
    width: 100%;
    max-width: 480px;
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background-color: #fff;

    p {
        width: 100%;
        padding-top: 30px;
        text-align: center;
        font-size: 2rem;
    }
`;

// 헤더
export const MenuBtn = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    transition: all 0.3s ease-in;
    background-color: #fff;
    cursor: pointer;

    &:hover {
        background-color: #eee;
    }
`;
export const Btnbar = styled.span`
    width: 16px;
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
        width: 20px;
        height: 2px;
        position: absolute;
        left: 0;
        background-color: #222;
    }
    &:after {
        bottom: 6px;
    }
    &:before {
        top: 6px;
    }
`;

// 사이드 메뉴
export const AsideMenu = styled.aside`
    width: 100%;
    max-width: 480px;
    height: 100vh;
    position: fixed;
    right: -480px;
    top: 0;
    padding: 30px;
    transition: all 0.2s ease-in;
    background-color: #fff;

    &.show {
        right: 0;
    }
`;
export const Nav = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
export const CancelBtn = styled.button`
    width: 40px;
    height: 40px;
    background-color: transparent;
    cursor: pointer;

    svg {
        font-size: 2rem;
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
