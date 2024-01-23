import { Link, NavLink } from "react-router-dom";
import { styled } from "styled-components";

// 레이아웃
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

// 시멘틱 태그
export const HeaderTag = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;

    .inner {
        border-bottom: 1px solid #ddd;
    }
`;
export const MainTag = styled.main`
    padding-top: 167.5px;
`;
export const Section = styled.section`
    &#register {
        .inner {
            border-top: 1px solid #ddd;
        }
    }
`;
export const Article = styled.article``;
export const FooterTag = styled.footer`
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;

    .inner {
        border-top: 1px solid #ddd;
    }
`;
export const Aside = styled.aside`
    &#side_menu {
        position: fixed;
        right: -100%;
        top: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        justify-content: flex-end;
        z-index: 999;
        transition: all 0.2s ease-in;
        background-color: rgba(0, 0, 0, 0.3);

        &.show {
            right: 0;
            left: 0;
            bottom: 0;
        }
    }

    &#sell {
        position: absolute;
        bottom: 90px;
        right: 0px;
        z-index: 9;
    }
`;
export const Nav = styled.nav`
    &.menu_nav {
        width: 100%;
        height: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        padding: 0 10px;
    }

    &.footer_nav {
        padding: 6px 0 10px;
    }
`;

// h1 ~ h6 태그
export const H1 = styled.h1``;
export const H2 = styled.h2`
    &.anbd {
        font-size: 5rem;
        font-weight: 800;
        font-family: var(--Eng-font);
        color: var(--primary-color);
    }
`;
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

// div 태그
export const Div = styled.div`
    &#splash {
        width: 100%;
        max-width: 480px;
        height: 100vh;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        background-color: #111;
    }

    &.header {
        width: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        .header_top {
            width: 100%;
            height: 60px;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
        .header_bottom {
            width: 100%;
        }
    }

    &.loading {
        width: 100%;
        max-width: 480px;
        height: 100vh;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        background-color: #fff;

        p {
            width: 100%;
            padding-top: 30px;
            text-align: center;
            font-size: 1.6rem;
        }
    }

    &.home {
        width: 100%;
        padding: 30px 0;
    }

    &.search {
        width: 100%;
        padding: 10px 0 0;
    }

    &.banner {
        width: 100%;
        background-color: #fff;

        .banner_wrap {
            width: 100%;

            .swiper_wrap {
                width: 100%;

                .swiper-pagination {
                    width: 110px !important;
                    padding: 5px 0;
                    border-radius: 15px;
                    background-color: rgba(0, 0, 0, 0.3);

                    .swiper-pagination-bullet {
                        width: 5px;
                        height: 5px;
                        border-radius: 5px;
                        background-color: #fff;
                    }
                    .swiper-pagination-bullet-active.swiper-pagination-bullet-active-main {
                        width: 18px;
                        height: 5px;
                        border-radius: 5px;
                        background-color: #fff;
                    }
                    .swiper-pagination-bullet-active-prev,
                    .swiper-pagination-bullet-active-next {
                        width: 10px;
                        height: 5px;
                        border-radius: 30px;
                        background-color: #fff;
                        opacity: 0.7;
                    }
                    .swiper-pagination-bullet-active-prev-prev,
                    .swiper-pagination-bullet-active-next-next {
                        width: 6px;
                        height: 5px;
                        border-radius: 30px;
                        background-color: #fff;
                        opacity: 0.5;
                    }
                }
            }
        }
    }

    &.profile {
        width: 100%;
        height: calc(100vh - 60px);
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        align-items: center;

        .my_profile {
            width: 100%;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            flex-direction: column;
            gap: 5px 0;
            margin-top: 30px;

            .thumb {
                margin: 0;
            }
        }
    }

    &.footer {
        position: relative;
    }

    &.register {
        width: 100%;
        height: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 100px;

        .register_input_box,
        .register_textarea {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            flex-direction: column;
            gap: 10px 0;
            padding-top: 10px;
        }
        .register_category {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            flex-direction: column;
            gap: 10px 0;

            .category_btns {
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }
        }
    }

    &.side_menu_wrap {
        width: 100%;
        max-width: 480px;
        height: 100%;
        padding: 30px;
        background-color: #fff;

        .side_menu_header {
            width: 100%;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            justify-content: space-between;
            padding-bottom: 10px;
            border-bottom: 1px solid #111;
        }

        .my_page {
            width: 100%;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            flex-direction: column;
            margin-top: 30px;

            .my_page_items {
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                flex-direction: column;
                gap: 5px 0;
            }
        }
    }

    &.signup,
    &.login {
        width: 100%;
        height: calc(100vh - 60px);
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export const Ul = styled.ul`
    &.menu_account {
        width: 60%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        justify-content: flex-end;
    }

    &.category_list {
        width: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        padding-top: 20px;
    }

    &.quick_menu_list {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        justify-content: space-between;
    }
`;
export const Li = styled.li`
    &.account_list {
        margin-right: 10px;

        &:last-child {
            margin: 0;
        }
    }

    &.category_items {
        width: 20%;
    }
`;
export const P = styled.p`
    &.nick_name {
        font-size: 1.6rem;
        color: #111;
    }

    &.copyright {
        text-align: center;
    }
`;
export const Span = styled.span`
    &.bar {
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
    }

    &.thumb {
        margin-left: 10px;
        font-size: 3rem;
        color: #999;
    }

    &.maximun {
        display: block;
        padding-top: 5px;
        color: #999;

        em {
            color: var(--primary-color);
        }
    }

    &.required {
        padding-right: 5px;
        vertical-align: middle;
        color: #cf4344;

        em {
            padding-left: 5px;
            font-size: 1.4rem;
            font-weight: 500;
            color: var(--secondary-color);
        }
    }
`;
export const Em = styled.em``;

// 링크, 버튼
export const StyledNavLink = styled(NavLink)`
    &.category_link {
        display: block;
        padding: 10px;
        transition: all 0.2s ease-in;
        text-align: center;
        font-size: 1.4rem;
        font-weight: 500;

        &.active {
            background-color: #eee;
        }
    }
`;
export const Paginate = styled(StyledNavLink)`
    &.quick_menu_link {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px 0;
        padding: 5px 15px;
        font-size: 1.2rem;

        .menu_icon {
            font-size: 2.4rem;
        }
        &.active {
            .quick_menu_text {
                color: var(--primary-color);
            }
            .menu_icon {
                svg {
                    fill: var(--primary-color);
                }
            }
        }
    }
`;
export const ALink = styled(Link)`
    &.header_link {
        width: 80%;
        display: block;
        padding: 10px 10px 10px 0;
    }

    &.account_link {
        width: 100px;
        display: block;
        padding: 8px 0;
        text-align: center;
        font-size: 1.6rem;
        background-color: #111;
        color: var(--accent-color);
    }

    &.move_btn {
        margin-left: 10px;
        font-weight: 600;
        text-decoration: underline;

        &:hover {
            text-decoration: underline;
            color: var(--primary-color);
        }
    }

    &.sell_link {
        display: block;
        padding: 10px;
        border-radius: 20px;
        font-size: 1.6rem;
        background-color: var(--primary-color);
        color: #fff;

        .sell_icon {
            vertical-align: top;
        }
    }
`;
export const Button = styled.button`
    &.menu_btn {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        background-color: #fff;
        cursor: pointer;
    }

    &.cancel_btn {
        width: 40px;
        height: 40px;
        background-color: transparent;
        cursor: pointer;

        svg {
            font-size: 3rem;
            color: #111;
        }
    }

    &.logut_btn {
        width: 100px;
        height: 34px;
        display: block;
        font-size: 1.6rem;
        background-color: #111;
        color: var(--accent-color);
        cursor: pointer;
    }

    &.search_btn {
        width: 40px;
        height: 100%;
        position: absolute;
        top: 0;
        right: 5px;
        border-radius: 0 30px 30px 0;
        background-color: transparent;
        cursor: pointer;

        .search_icon {
            font-size: 2.4rem;
            color: var(--primary-color);
        }
    }

    &.category_btn {
        width: 60px;
        padding: 8px 0;
        border-radius: 15px;
        text-align: center;
        border: 1px solid #111;
        transition: all 0.2s ease-in;
        background-color: #fff;
        color: #111;
        cursor: pointer;

        &.active {
            background-color: #111;
            color: #fff;
        }
    }
`;

// 폼, 인풋
export const Form = styled.form`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    &.search_form {
        width: 100%;
        position: relative;
        padding: 0;
    }

    &.register_form {
        width: 100%;
        padding: 30px 0;
        gap: 30px 0;
    }
`;
export const Input = styled.input`
    &.login_input,
    &.signup_input {
        width: 100%;
        padding: 10px 0px 10px 10px;
        margin-bottom: 15px;
        border-radius: 10px;
        border: 1px solid #999;
    }

    &.btn_input {
        width: 100%;
        padding: 10px 0px 10px 10px;
        border-radius: 10px;
        border: 0 none;
        background-color: var(--primary-color);
        cursor: pointer;
    }

    &.search_input {
        width: 100%;
        padding: 10px 0px 10px 15px;
        border-radius: 30px;
        border: 2px solid var(--primary-color);
        background-color: #fff;

        &:placeholder {
            color: #ccc;
        }
    }

    &.photo_input {
        display: none;
    }

    &.register_input {
        width: 100%;
        padding: 10px 0px 10px 15px;
        border-radius: 5px;
        border: 1px solid #999;
    }
`;
export const Label = styled.label`
    &.register_label {
        font-size: 1.4rem;
        font-weight: 500;
        color: var(--secondary-color);
    }
    &.photo_label {
        display: inline-block;
        padding: 15px;
        border-radius: 5px;
        border: 1px solid #999;
        cursor: pointer;

        svg {
            font-size: 1.8rem;
            color: #999;
        }
    }
`;
export const TextArea = styled.textarea`
    &.product_desc {
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #999;
        resize: none;
    }
`;

export const Select = styled.select`
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #999;
    color: #777;
`;
export const Option = styled.option``;

// 이미지
export const Img = styled.img``;

// 커스텀
export const Error = styled.span`
    width: 100%;
    display: block;
    padding-top: 10px;
    text-align: center;
    font-size: 1.4rem;
    color: #ff5252;
`;
export const Switcher = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 0 20px;
    margin-top: 20px;

    p {
        color: #666;
    }
`;
