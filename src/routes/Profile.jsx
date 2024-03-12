import React from "react";
import { useStateContext } from "../context/useStateContext";
import useFetchProducts from "../hooks/useFetchProducts";

import {
    ALink,
    AccentColor,
    Button,
    Container,
    Div,
    Em,
    H2,
    H3,
    H4,
    HeaderTag,
    Icon,
    Img,
    Li,
    Nav,
    P,
    Section,
    Span,
    Ul,
} from "../styledComponents";
import { FaUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RiCoupon3Line, RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

const Profile = () => {
    const { useObj, handleMenuClick } = useStateContext();
    const { filteredPurchase } = useFetchProducts();

    console.log(filteredPurchase);

    return (
        <Section id="profile">
            <H2 className="blind">프로필</H2>
            <Container>
                <Div className="profile">
                    <HeaderTag className="profile_header">
                        <Div className="profile_thumb">
                            <Icon className="thumb">
                                <FaUserCircle />
                            </Icon>
                            <P className="nick_name">{useObj.displayName}</P>
                        </Div>
                        <Icon className="setting">
                            <IoSettingsOutline />
                        </Icon>
                        <Button onClick={handleMenuClick} className="menu_btn">
                            <Span className="bar" />
                        </Button>
                    </HeaderTag>
                    <Nav className="user_action_nav">
                        <Ul className="user_action_list">
                            <Li className="point action_item">
                                <Icon className="action_icon">
                                    <RiMoneyDollarCircleLine />
                                </Icon>
                                포인트 <AccentColor>5,000p</AccentColor>
                            </Li>
                            <Li className="coupon action_item">
                                <Icon className="action_icon">
                                    <RiCoupon3Line />
                                </Icon>
                                쿠폰함 <AccentColor>3개</AccentColor>
                            </Li>
                            <Li className="purchase action_item">
                                <ALink className="action_link">
                                    <Icon className="action_icon">
                                        <TbTruckDelivery />
                                    </Icon>
                                    구매내역
                                </ALink>
                            </Li>
                        </Ul>
                    </Nav>
                    <Div className="profile_contents">
                        <Div className="profile_menu">
                            <H3 className="profile_menu_title">MY 메뉴</H3>
                            <Ul className="profile_menu_list">
                                <Li className="profile_menu_item">FAQ</Li>
                                <Li className="profile_menu_item">Q&A</Li>
                                <Li className="profile_menu_item">이벤트</Li>
                                <Li className="profile_menu_item">고객센터</Li>
                                <Li className="profile_menu_item">공지사항</Li>
                                <Li className="profile_menu_item">자주 묻는 질문</Li>
                            </Ul>
                        </Div>
                        <Div className="profile_menu">
                            <H3 className="profile_alarm_title">MY 알림</H3>
                            <Ul className="purchase_list">
                                {filteredPurchase.map((purchase) => (
                                    <Li key={purchase.id} className="purchase_item">
                                        <ALink to={`/product/detail/${purchase.id}`} className="purchase_link">
                                            <H4 className="purchase_title">{purchase.username}님의 상품</H4>
                                            <Div className="purchase_text_box">
                                                <P className="purchase_text">
                                                    <Em className="delivery">[배송]</Em> {purchase.title} 상품을 구매하셨습니다. 구매내역에서 확인해보세요.
                                                </P>
                                                <Div className="purchase_image">
                                                    {purchase.imageUrl && <Img src={purchase.imageUrl[0]} alt={purchase.title} />}
                                                </Div>
                                            </Div>
                                        </ALink>
                                    </Li>
                                ))}
                            </Ul>
                        </Div>
                    </Div>
                </Div>
            </Container>
        </Section>
    );
};

export default Profile;
