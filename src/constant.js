import { GoHomeFill } from "react-icons/go";
import { RiUser3Fill } from "react-icons/ri";
import { FaBell } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { IoReceiptSharp } from "react-icons/io5";

export const categoryList = [
    { text: "전체", value: "" },
    { text: "베스트", desc: "(상태가 좋은 물건 판매)", value: "best" },
    { text: "나눔", desc: "(무료 나눔)", value: "free" },
    { text: "교환", desc: "(서로 교환)", value: "exchange" },
    { text: "재사용", desc: "(쓸만한 물건 판매)", value: "reuse" },
];

export const subCategoryList = [
    { text: "디지털기기", value: "digital" },
    { text: "가구/인테리어", value: "furniture" },
    { text: "여성의류/잡화", value: "women" },
    { text: "남성의류/잡화", value: "men" },
    { text: "생활가전", value: "home_appliance" },
    { text: "주방", value: "kitchen" },
    { text: "스포츠/레저", value: "sports_leisure" },
    { text: "취미/게임/음반", value: "hobby_entertainment" },
    { text: "뷰티/미용", value: "beauty" },
    { text: "반려동물용품", value: "pet" },
    { text: "도서", value: "books" },
    { text: "기타", value: "other" },
];

export const bannerImages = [
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

export const footerNav = [
    { icon: <GoHomeFill />, path: "/", text: "홈" },
    { icon: <IoMdHeart />, path: "/mypick", text: "찜목록" },
    { icon: <IoReceiptSharp />, path: "/receipt", text: "판매내역" },
    { icon: <FaBell />, path: "/notice", text: "알림" },
    { icon: <RiUser3Fill />, path: "/profile", text: "My" },
];
