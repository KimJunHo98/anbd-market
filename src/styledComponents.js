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
    &#header {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;

        .inner {
            position: relative;
            border-bottom: 1px solid #555;
        }
    }

    &#detail_header {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;

        .inner {
            transition: all 0.1s ease;

            &.invisible {
                background-color: transparent;
            }

            &.visible {
                background-color: #222;
                border-bottom: 1px solid #555;
            }
        }
    }

    &.profile_header {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 30px 15px 30px;

        .profile_thumb {
            margin-right: auto;

            .thumb {
                vertical-align: middle;
                margin: 0 10px 0 0;
            }
            .nick_name {
                display: inline-block;
            }
        }
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
export const MainTag = styled.main``;
export const Section = styled.section`
    &#upload {
        .inner {
            border-top: 1px solid #ddd;
        }
    }
`;
export const Article = styled.article`
    &.receipt_item_wrap {
        display: flex;
    }
`;
export const Aside = styled.aside`
    &#side_menu {
        width: 100%;
        max-width: 480px;
        height: 100%;
        position: fixed;
        right: -100%;
        top: 0;
        display: flex;
        justify-content: flex-end;
        z-index: 999;
        transition: all 0.2s ease-in;
        background-color: rgba(0, 0, 0, 0.3);

        &.show {
            right: 0;
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
        bottom: 100px;
        right: 10px;
        z-index: 9;
        transition: all 0.2s ease;

        &.isLogin {
            bottom: 140px;
        }
        &.show {
            opacity: 1;
        }
        &.hide {
            opacity: 0;
            pointer-events: none;
        }
        &.isDetail {
            bottom: 100px;
        }
    }
`;
export const Nav = styled.nav`
    &.home_nav {
        padding: 10px 0;
    }

    &.menu_nav {
        padding: 50px 0;
    }

    &.user_action_nav {
        width: 100%;
    }

    &.footer_nav {
        padding: 6px 0 10px;
    }
`;

// h1 ~ h6 태그
export const H1 = styled.h1``;
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
    &.receipt_title,
    &.notice_title {
        font-size: 1.8rem;
        margin-bottom: 30px;
    }

    &.profile_menu_title,
    &.profile_alarm_title {
        margin: 20px 0;
        padding: 10px 15px;
        font-size: 1.6rem;
        font-weight: 500;
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        background-color: #111;
    }

    &.header {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        .header_top {
            width: 100%;
            height: 60px;
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
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .detail_header_right {
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

            &.back_btn {
                text-align: left;
            }
        }
    }

    &.home {
        width: 100%;
        min-height: calc(100vh - 400px);
        display: flex;
        flex-direction: column;
        gap: 80px 0;
        padding: 30px 0 100px;

        .home_item_box {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 20px 0;
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
            position: relative;

            .swiper_wrap {
                width: 100%;

                .swiper-pagination.swiper-pagination-fraction.swiper-pagination-horizontal {
                    width: 60px;
                    left: 95%;
                    padding: 7px 0;
                    transform: translateX(-90%);
                    border-radius: 15px;
                    background-color: rgba(0, 0, 0, .3);
                }
            }
        }
    }

    &.detail {
        height: 100%;
        min-height: 100vh;
        padding-bottom: 69px;
        background-color: #222;
        width: 100%;

        .detail_item_wrap {
            display: flex;
            flex-direction: column;
            padding-bottom: 30px;

            .detail_top {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 15px 20px;
                border-bottom: 1px solid #444;

                & > div {
                    display: flex;
                    align-items: center;
                    gap: 0 10px;

                    .thumb {
                        margin-left: 0;
                    }
                }
            }
            .detail_text {
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
        min-height: calc(100vh - 174.5px);
        display: flex;
        flex-direction: column;
        gap: 10px 0;
        padding: 30px 0 68px;

        .product_text,
        .category_text,
        .sub_category_text,
        .receipt_text {
            display: flex;
            flex-direction: column;
            gap: 10px 0;
            font-size: 1.4rem;
        }
    }

    &.profile {
        width: 100%;
        height: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px 0 69px;
        background-color: #222;

        .profile_contents {
            width: 100%;

            .purchase_text_box {
                display: flex;
                flex-direction: row-reverse;
                justify-content: space-between;

                .purchase_image {
                    margin-right: 10px;

                    img {
                        width: 60px;
                        height: 60px;
                        object-fit: cover;
                    }
                }
            }
        }
    }

    &.notice,
    &.my_pick {
        width: 100%;
        min-height: calc(100vh - 173.5px);
        display: flex;
        flex-direction: column;
        gap: 11px 0;
        padding: 30px 0 69px;
    }

    &.my_pick {
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

    &.upload {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 100px;

        .file_image_wrap {
            position: relative;
        }

        .upload_input_box,
        .upload_textarea {
            display: flex;
            flex-direction: column;
            gap: 10px 0;
            padding-top: 10px;
        }
        .upload_category {
            display: flex;
            flex-direction: column;
            gap: 10px 0;

            .category_btns {
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
            display: flex;
            justify-content: space-between;
            padding-bottom: 10px;
            border-bottom: 1px solid #111;
        }

        .my_page {
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-top: 30px;

            .my_page_items {
                display: flex;
                flex-direction: column;
                gap: 5px 0;

                .nick_name {
                    color: #111;
                }
            }
        }
    }

    &.signup,
    &.login {
        width: 100%;
        height: calc(100vh - 168.5px);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    &.option_btn {
        position: relative;
        margin-left: auto;
        color: var(--main-color);
        border-bottom: 1px solid #555;

        .option_btn_box {
            width: 100%;
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 36px;
            left: 0px;
            display: none;

            &.show {
                display: block;
            }
        }
    }
`;

export const DetailImage = styled.div`
    .detail_image {
        width: 480px;
        height: 480px;
        object-fit: cover;
    }

    @media all and (max-width: 479px) {
        .detail_image {
            width: 100%;
            height: auto;
            max-height: 479px;
        }
    }
`;
export const Loading = styled.div`
    width: 100%;
    max-width: 480px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    p {
        width: 100%;
        padding-top: 30px;
        text-align: center;
        font-size: 1.6rem;
    }
`;

export const Ul = styled.ul`
    &.home_nav_wrap {
        display: flex;
        flex-wrap: wrap;
        gap: 15px 0;
        justify-content: space-between;
    }

    &.menu_account {
        width: 60%;
        display: flex;
        justify-content: flex-end;
    }

    &.category_list {
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding-top: 20px;
    }

    &.quick_menu_list {
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

    &.user_action_list {
        display: flex;
        text-align: center;
    }
    &.profile_menu_list {
        display: flex;
        flex-wrap: wrap;
        text-align: center;
    }
    &.purchase_list {
        display: flex;
        flex-direction: column;
    }
`;
export const Li = styled.li`
    &.home_nav_list {
        width: 24%;
    }

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

    &.menu_item {
        padding: 10px 0;
    }

    &.action_item {
        width: 33.3333%;
        padding: 30px;
        font-size: 1.4rem;
        font-weight: 300;
        border: 1px solid #555;

        &.coupon {
            border-left: 0;
            border-right: 0;
        }
        &.point {
            border-left: 0;
        }
        &.purchase {
            padding: 0;
            border-right: 0;
        }
    }

    &.profile_menu_item {
        width: 50%;
        padding: 20px 10px;
        border-top: 1px solid #555;
        font-size: 1.4rem;
        font-weight: 300;
        cursor: pointer;

        &:nth-child(odd) {
            border-right: 1px solid #555;
        }
        &:nth-child(5),
        &:nth-child(6) {
            border-bottom: 1px solid #555;
        }
    }

    &.purchase_item {
        width: 100%;
        padding: 15px;
        border-top: 1px solid #555;
        border-bottom: 1px solid #555;
    }
`;
export const P = styled.p`
    &.nick_name {
        font-size: 1.6rem;
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

    &.maximum {
        padding-left: 5px;
    }

    &.pick_count {
        position: absolute;
        bottom: 35px;
        right: 0;
        font-size: 1.4rem;
        background-color: transparent;

        svg {
            margin-right: 5px;
            vertical-align: top;
        }
    }

    &.purchase_text {
        font-size: 1.4rem;
    }
`;
export const NotHave = styled.p`
    font-size: 1.4rem;
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
        font-size: 1.6rem;
        font-weight: 500;
        color: #111;
    }

    &.depth_text {
        width: 100%;
        display: block;
        padding: 10px 0 10px 10px;
        font-size: 1.6rem;
        color: #111;
    }
`;
export const Icon = styled.span`
    &.thumb,
    &.setting {
        margin-left: 10px;
        font-size: 3rem;
        color: #eee;
    }
    &.setting {
        margin-right: 10px;
        font-size: 2.4rem;
        cursor: pointer;
    }

    &.menu_icon {
        font-size: 2.4rem;
    }

    &.detail_header_icon {
        font-size: 2.4rem;
        color: var(--main-color);
    }

    &.search_icon {
        font-size: 2.4rem;
        color: var(--main-color);
    }
    &.search_cancel_icon {
        font-size: 2rem;
        color: var(--main-color);
    }

    &.cancel_icon {
        font-size: 3rem;
        color: #111;
    }

    &.heart_empty_icon {
        margin-right: 5px;
        vertical-align: top;
    }

    &.photo_icon {
        font-size: 3rem;
        color: #999;
    }

    &.action_icon {
        display: block;
        font-size: 2.6rem;
        margin-bottom: 10px;
    }

    &.dot_icon {
        padding: 10px;
        font-size: 2rem;
        color: var(--main-color);
        cursor: pointer;
    }

    &.delete_icon {
        position: absolute;
        top: -10px;
        right: 0px;
        font-size: 2.4rem;
        cursor: pointer;
    }

    &.playPause_icon {
        font-size: 1.6rem;
    }
`;

export const Em = styled.em`
    &.delivery {
        color: var(--primary-color);
    }
`;
export const AccentColor = styled.em`
    color: var(--accent-color);
`;

// 링크, 버튼
export const StyledNavLink = styled(NavLink)``;
export const Paginate = styled(StyledNavLink)`
    &.quick_menu_link {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px 0;
        padding: 5px 15px;
        font-size: 1.2rem;

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

    &.home_nav_link {
        display: block;
        text-align: center;
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
        display: flex;
        flex-direction: row;
        gap: 0 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #555;
    }

    &.depth_link {
        width: 100%;
        display: block;
        padding: 10px 0 10px 10px;
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

    &.action_link {
        display: block;
        padding: 30px;
    }

    &.pick_item {
        display: flex;
        gap: 0 10px;
        position: relative;
        padding-bottom: 10px;
        border-bottom: 1px solid #555;
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
    }
    &.search_cancel_btn {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 7px;
        right: 40px;
        border-radius: 15px;
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
        color: #111;

        &.soldout {
            background-color: var(--main-color);
            color: #111;
        }
    }

    &.toggle_button {
        width: 100%;
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

    &.delete_btn {
        width: 100%;
        padding: 5px 0;
        border: 1px solid #fff;
        border-radius: 5px;
        color: var(--main-color);
    }

    &.edit_btn {
        position: relative;

        .edit {
            width: 100%;
            position: absolute;
            top: 40px;
            left: 0;
            display: none;
            padding: 5px;
            border: 1px solid #fff;
            border-radius: 5px;
            color: var(--main-color);
            background-color: #222;

            &.show {
                display: block;
            }
        }
    }

    &.cancel_edit_btn {
        padding: 10px 0;
        border-radius: 5px;
        background-color: var(--primary-color);
    }

    &.playPause_btn {
        height: 24px;
        position: absolute;
        left: 18px;
        bottom: 8px;
        padding: 0 15px;
        z-index: 99;
        border-radius: 15px;
        background-color: rgba(0, 0, 0, .3);
        color: var(--main-color);
    }
`;

// 폼, 인풋
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    &.search_form {
        width: 100%;
        position: relative;
        padding: 0;
    }

    &.upload_form {
        width: 100%;
        padding: 30px 0;
        gap: 30px 0;
    }

    &.edit_form {
        padding: 0;
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

    &.upload_input {
        width: 100%;
        padding: 10px 0px 10px 15px;
        border-radius: 5px;
        background-color: #333;
        color: #fff;

        &::placeholder {
            color: #ccc;
        }
    }

    &.edit_btn {
        margin: 30px 0 20px;
        padding: 10px 0;
        border-radius: 5px;
        cursor: pointer;
    }
`;
export const Label = styled.label`
    &.upload_label {
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

    &.edit_textbox {
        width: 100%;
        height: 100%;
        min-height: 300px;
        min-width: 300px;
        padding: 10px;
        border: 1px solid #555;
        border-radius: 5px;
        resize: none;
        background-color: #222;
        color: var(--main-color);
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
    &.splash_img {
        width: 150px;
    }

    &.home_nav_thumb {
        width: 50px;
        height: 50px;
        display: block;
        margin: 0 auto 10px;
        border-radius: 30px;
        object-fit: cover;
    }

    &.thumb_image {
        width: 62px;
        height: 62px;
        position: relative;
        margin-right: 10px;
        border-radius: 5px;
    }
`;
export const Figure = styled.figure`
    &.home_image img {
        width: 211px;
        height: 211px;
        object-fit: cover;
        border-radius: 15px;
    }

    &.product_image,
    &.category_image,
    &.sub_category_image,
    &.receipt_image,
    &.pick_image {
        width: 100px;

        img {
            height: 100px;
            object-fit: cover;
            border-radius: 10px;
        }
    }
`;
export const Figcaption = styled.figcaption``;

export const Error = styled.span`
    width: 100%;
    display: block;
    padding-top: 10px;
    text-align: center;
    font-size: 1.4rem;
    color: #ff5252;
`;

export const Switcher = styled.div`
    display: flex;
    padding: 0 20px;
    margin-top: 20px;

    p {
        color: #666;
    }
`;
