import { GoHomeFill } from "react-icons/go";
import { RiUser3Fill } from "react-icons/ri";
import { FaBell, FaBars } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";

export const images = [
    {
        title: "banner1",
        src: "/images/banner/img_ban1.svg",
    },
    {
        title: "banner2",
        src: "/images/banner/img_ban2.svg",
    },
    {
        title: "banner3",
        src: "/images/banner/img_ban3.svg",
    },
    {
        title: "banner4",
        src: "/images/banner/img_ban4.svg",
    },
    {
        title: "banner5",
        src: "/images/banner/img_ban5.svg",
    },
    {
        title: "banner6",
        src: "/images/banner/img_ban6.svg",
    },
    {
        title: "banner7",
        src: "/images/banner/img_ban7.svg",
    },
];

export const homeCategory = [
    {path: "/product", text: "All"},
    {path: "/product/best", text: "베스트"},
    {path: "/product/free", text: "나눔"},
    {path: "/product/barter", text: "교환"},
    {path: "/product/reuse", text: "재사용"},
]

export const footerNav = [
    { icon: <GoHomeFill />, path: "/", text: "홈" },
    { icon: <FaBars />, path: "/category", text: "카테고리" },
    { icon: <IoMdHeart />, path: "/mypick", text: "찜" },
    { icon: <FaBell />, path: "/notice", text: "알림" },
    { icon: <RiUser3Fill />, path: "/profile", text: "My" },
];
