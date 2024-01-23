import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase";

import { Article, Container, Div, H2, Inner, Li, Section, Ul } from "../styledComponents";

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
            } catch (error) {
                console.error("데이터를 가져오는 중 오류 발생:", error);
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
                            <p>로딩 중...</p>
                        ) : (
                            <Article className="detail_item">
                                <Ul>
                                    <Li>{product.text}</Li>
                                    <Li>가격: {product.price}</Li>
                                    <Li>브랜드: {product.brand}</Li>
                                    <Li>사이즈: {product.size}</Li>
                                    <Li>상품설명 : {product.desc}</Li>
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
