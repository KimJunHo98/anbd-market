import React from "react";
import useFetchProducts from "../hooks/useFetchProducts";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import { Article, Container, Div, H2, H3, Img, Inner, Li, P, Section, Ul } from "../styledComponents";

dayjs.extend(relativeTime);
dayjs.locale("ko");

const Detail = () => {
  const { product, loading } = useFetchProducts();

    return (
        <Section id="detail">
            <H2 className="blind">상품 디테일 페이지</H2>
            <Container>
                <Inner>
                    <Div className="detail">
                        {loading ? (
                            <Div className="loading">
                                <P>로딩 중...</P>
                            </Div>
                        ) : (
                            <Article className="detail_item">
                                <Div className="detail_image">
                                    <Img src={product.imageUrl} alt={product.title} />
                                </Div>
                                <H3 className="username">{product.username}</H3>
                                <Ul className="detail_text">
                                    <Li className="title">{product.title}</Li>
                                    <Li className="price">{product.price}원</Li>
                                    <Li className="brand">{product.brand}</Li>
                                    <Li className="size">{product.size}</Li>
                                    <Li className="time">{dayjs(product.createdAt).fromNow()}</Li>
                                    <Li className="desc">{product.desc}</Li>
                                </Ul>
                            </Article>
                        )}
                    </Div>
                </Inner>
            </Container>
        </Section>
    );
};

export default Detail;
