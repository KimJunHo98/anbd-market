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
    background-color: #222;
`;

// 시멘틱 태그
export const HeaderTag = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;

    .inner {
        border-bottom: 1px solid #555;
        position: relative;
    }
`;
export const FooterTag = styled.footer`
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;

    .inner {
        border-top: 1px solid #555;
    }
`;
export const MainTag = styled.main`
    padding-top: 168.5px;
`;
export const Section = styled.section`
    &#register {
        .inner {
            border-top: 1px solid #ddd;
        }
    }
`;
export const Article = styled.article`
    &.pick_list {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        gap: 0 10px;
        position: relative;
        padding-bottom: 10px;
        border-bottom: 1px solid #555;
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

    &#top_btn {
        position: absolute;
        bottom: 140px;
        right: 10px;
        z-index: 9;
        transition: all 0.2s ease;

        &.show {
            opacity: 1;
        }
        &.hide {
            opacity: 0;
            pointer-events: none;
        }
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
        padding: 50px 0;
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

    &.username {
        display: inline-block;
        font-size: 1.6rem;
        font-weight: 400;
    }

    &.home_item_title {
        padding-bottom: 25px;
        font-size: 1.8rem;
        font-weight: 500;
    }

    &.pick_title,
    &.receipt_title {
        font-size: 1.8rem;
        margin-bottom: 30px;
    }
`;
export const H4 = styled.h4`
    &.title {
        font-size: 1.6rem;
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
    &.detail_header {
        width: 100%;
        height: 60px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .detail_header_right {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            gap: 0 5px;
        }
        .detail_header_left > button,
        .detail_header_right > button {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            background-color: transparent;
            cursor: pointer;

            svg {
                font-size: 2.4rem;
                color: var(--main-color);
            }

            &.back_btn {
                text-align: left;
            }
        }
    }
    &.toggle_search {
        width: 100%;
        max-width: 480px;
        height: 100vh;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 60px;
        left: 50%;
        transform: translateX(-50%);
        padding: 0 20px 10px;
        background-color: #222;

        .search {
            width: 90%;

            .search_input {
                border: 0 none;
            }
        }
        .toggle_search_top {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .cancel_btn {
            padding-top: 10px;
            color: var(--main-color);
            cursor: pointer;
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
        min-height: calc(100vh - 400px);
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        gap: 80px 0;
        padding: 30px 0 100px;

        .home_item_box {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 20px 0;

            .home_image img {
                width: 211px;
                height: 211px;
                object-fit: cover;
                border-radius: 15px;
            }
        }
        .show_more {
            margin-top: 30px;
            text-align: center;
        }
    }

    &.search {
        width: 100%;
        padding: 10px 0 0;
    }

    &.banner {
        width: 100%;

        .banner_wrap {
            width: 100%;

            .swiper_wrap {
                width: 100%;

                .swiper-pagination.swiper-pagination-fraction.swiper-pagination-horizontal {
                    width: 60px;
                    left: 90%;
                    padding: 7px 0;
                    transform: translateX(-90%);
                    border-radius: 15px;
                    background-color: #111;
                }
            }
        }
    }

    &.detail {
        height: 100%;
        min-height: calc(100vh - 60px);
        padding-bottom: 69px;
        background-color: #222;

        .detail_item_wrap {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            flex-direction: column;
            padding-bottom: 30px;

            .detail_top {
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 15px 20px;
                border-bottom: 1px solid #444;

                & > div {
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    align-items: center;
                    gap: 0 10px;

                    .thumb {
                        margin-left: 0;
                    }
                }
            }
            .detail_text {
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                flex-direction: column;
                gap: 20px 0;
                padding: 30px 20px;
                font-size: 2rem;

                .price {
                    color: #ddd;
                    font-size: 1.6rem;
                }
                .desc {
                    line-height: 1.4;
                    padding-top: 20px;
                    font-size: 1.6rem;
                    font-weight: 300;
                }

                .row_text {
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    gap: 0 10px;
                    font-size: 1.4rem;
                    font-weight: 400;
                    color: #999;

                    &.top {
                        justify-content: space-between;
                    }

                    .sub_category {
                        font-size: 1.4rem;

                        .time {
                            margin-left: 10px;
                            font-size: 1.2rem;
                        }
                    }
                    .pick {
                        font-size: 1.6rem;

                        svg {
                            margin-right: 5px;
                            vertical-align: top;
                        }
                    }
                    .brand,
                    .size {
                        padding: 5px 7px 7px 7px;
                        border-radius: 3px;
                        font-size: 1.2rem;
                        font-weight: 500;
                        background-color: #fff;
                        color: #222;
                    }
                }
            }
        }
    }

    &.product,
    &.category,
    &.sub_category,
    &.receipt {
        width: 100%;
        min-height: calc(100vh - 177.5px);
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        gap: 10px 0;
        padding: 30px 0 69px;

        .product_text,
        .category_text,
        .sub_category_text,
        .receipt_text {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            flex-direction: column;
            gap: 10px 0;
            font-size: 1.4rem;
        }
        .product_image,
        .category_image,
        .sub_category_image,
        .receipt_image {
            width: 100px;

            img {
                height: 100px;
                object-fit: cover;
                border-radius: 10px;
                border: 1px solid #555;
            }
        }
    }

    &.profile {
        width: 100%;
        height: calc(100vh - 168.5px);
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

    &.notice,
    &.my_pick {
        width: 100%;
        min-height: calc(100vh - 173.5px);
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        gap: 11px 0;
        padding: 30px 0 69px;
    }

    &.my_pick {
        .pick_image {
            width: 100px;

            img {
                height: 100px;
                object-fit: cover;
                border-radius: 10px;
                border: 1px solid #555;
            }
        }
        .pick_text {
            .col_text {
                margin-bottom: 10px;

                .title,
                .price {
                    font-size: 1.4rem;
                }
            }
            .state {
                margin-top: 10px;
            }
        }
    }

    &.footer {
        position: relative;
    }

    &.add_photo {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        flex-direction: row;
        gap: 0 20px;

        .thumb_image {
            .delete_btn {
                width: 30px;
                padding: 0 0 1px 0;
                position: absolute;
                top: -7px;
                right: -10px;
                background-color: transparent;
                cursor: pointer;

                svg {
                    font-size: 2.4rem;
                    color: #000;
                }
            }
        }
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
        height: calc(100vh - 168.5px);
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
        justify-content: space-around;
        padding-top: 20px;
    }

    &.quick_menu_list {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        justify-content: space-between;
    }

    &.row_text > li {
        display: inline-block;
        padding: 5px 5px 7px 5px;
        border-radius: 3px;
        font-size: 1.2rem;
        font-weight: 500;
        background-color: #111;
        color: var(--accent-color);

        &:first-child {
            margin-right: 5px;
        }

        &.soldout {
            margin-left: 10px;
            background-color: var(--main-color);
            color: #111;
        }
    }
    &.row_text > li.time,
    &.row_text > li.state {
        padding: 0 5px 0 0;
        font-size: 1.2rem;
        font-weight: 500;
        color: #999;
        background-color: transparent;

        &.state {
            text-decoration: underline;
        }
    }

    &.menu_depth {
        display: none;
        padding: 10px 0;
    }
    &.menu_depth.open {
        display: block;
    }

    &.home_col_text {
        padding-left: 5px;

        .title {
            padding: 0;
            margin-top: 8px;
            font-size: 1.4rem;
            font-weight: 400;
        }
        .depth_item {
            padding: 10px 0;

            li {
                display: inline-block;
                padding-right: 5px;
                font-size: 1.4rem;
                color: #ccc;
            }
        }
        .price {
            font-size: 1.6rem;
            font-weight: 500;
        }
    }
`;
export const Li = styled.li`
    &.account_list {
        margin-right: 10px;

        &:last-child {
            margin: 0;
        }
    }

    &.title {
        padding-bottom: 10px;
        font-weight: 600;
    }

    &.category_items {
        .category_link {
            display: block;
            position: relative;
            padding: 15px 10px;
            text-align: center;
            font-size: 1.4rem;
            font-weight: 400;

            &.active {
                color: var(--primary-color);
            }
            &.active:after {
                content: "";
                width: 100%;
                height: 2px;
                position: absolute;
                bottom: 0px;
                left: 0;
                background-color: var(--primary-color);
            }
        }
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

    &.time,
    &.state {
        display: block;
        font-size: 1.2rem;
        color: #999;
    }

    &.not_have {
        font-size: 1.4rem;
    }

    &.maximum {
        padding-left: 5px;
    }

    &.pick_count {
        position: absolute;
        bottom: 35px;
        right: 0;
        font-size: 1.4rem;
        background-color: transparent;
        color: var(--main-color);

        svg {
            margin-right: 5px;
            vertical-align: top;
        }
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
        background-color: #fff;

        &:after,
        &:before {
            content: "";
            width: 20px;
            height: 2px;
            position: absolute;
            left: 0;
            background-color: #fff;
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

    &.item_title {
        font-weight: 600;
    }
`;
export const Em = styled.em``;

// 링크, 버튼
export const StyledNavLink = styled(NavLink)``;
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
        width: 90px;
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
    &.home_item {
        max-width: 48%;
    }

    &.product_item,
    &.category_item,
    &.sub_category_item,
    &.receipt_item {
        width: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        flex-direction: row;
        gap: 0 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #555;
    }

    &.depth_link {
        width: 100%;
        display: block;
        padding: 6px 0 6px 10px;
        font-size: 1.6rem;
        color: #111;
    }

    &.more_btn {
        display: inline-block;
        padding: 10px 30px;
        border-radius: 15px;
        border: 1px solid #ddd;
        color: #ddd;
        font-size: 1.4rem;

        svg {
            padding-left: 5px;
            vertical-align: top;
        }
    }
`;
export const Button = styled.button`
    background-color: transparent;
    cursor: pointer;

    &.menu_btn {
        width: 40px;
        height: 40px;
        border-radius: 10px;
    }

    &.cancel_btn {
        width: 40px;
        height: 40px;

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
    }

    &.search_btn {
        width: 40px;
        height: 100%;
        position: absolute;
        top: 0;
        right: 5px;
        border-radius: 0 30px 30px 0;

        .search_icon {
            font-size: 2.4rem;
            color: var(--main-color);
        }
    }
    &.search_cancel_btn {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 7px;
        right: 40px;
        border-radius: 15px;

        .search_cancel_icon {
            font-size: 2rem;
            color: var(--main-color);
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

        &.active {
            background-color: #111;
            color: #fff;
        }
    }

    &.pick_btn {
        padding: 0 10px;
        font-size: 2.4rem;
        color: var(--main-color);
    }

    &.buy_btn {
        padding: 5px;
        border-radius: 5px;
        font-size: 1.6rem;
        font-weight: 500;
        background-color: var(--accent-color);

        &.soldout {
            background-color: var(--main-color);
            color: #111;
        }
    }

    &.toggle_button {
        width: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 1.6rem;
        color: #111;
    }

    &.top_btn {
        width: 40px;
        height: 40px;
        border-radius: 30px;
        font-size: 2.4rem;
        background-color: var(--primary-color);
        color: var(--main-color);
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
        border-radius: 15px;
        background-color: #333;
        color: #eee;

        &::placeholder {
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
        background-color: #333;
        color: #fff;

        &::placeholder {
            color: #ccc;
        }
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
            font-size: 3rem;
            color: #999;
        }
    }
`;
export const TextArea = styled.textarea`
    &.product_desc {
        padding: 10px;
        border-radius: 5px;
        background-color: #333;
        color: #fff;
        resize: none;

        &::placeholder {
            color: #ccc;
        }
    }
`;

export const Select = styled.select`
    &.category_select {
        width: 100%;
        padding: 10px 0 10px 10px;
        border-radius: 5px;
        background-color: #333;
        color: #ccc;
    }
`;
export const Option = styled.option``;

// 이미지
export const Img = styled.img`
    &.thumb_image {
        width: 62px;
        height: 62px;
        position: relative;
        margin-right: 10px;
        border-radius: 5px;
    }
`;

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
