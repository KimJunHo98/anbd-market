import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import { Article, Container, Div, H2, Img, Inner, Li, P, Section, Ul } from "../styledComponents";

dayjs.extend(relativeTime);
dayjs.locale("ko");

const Detail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const productDocRef = doc(firestore, "product", id);
                const productDocSnapshot = await getDoc(productDocRef);

                if (productDocSnapshot.exists()) {
                    setProduct(productDocSnapshot.data());
                } else {
                    console.log("해당 제품이 존재하지 않습니다.");
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetail();
    }, [id]);

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
                                    <Img src={product.image} alt={product.title} />
                                </Div>
                                <Ul className="detail_text">
                                    <Li className="title">{product.title}</Li>
                                    <Li className="price">{product.price}</Li>
                                    <Li className="brand">{product.brand}</Li>
                                    <Li className="size">{product.size}</Li>
                                    <Li className="desc">{product.desc}</Li>
                                    <Li className="time">{dayjs(product.createdAt).fromNow()}</Li>
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
