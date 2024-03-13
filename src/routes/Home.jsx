import React from "react";
import useFetchProducts from "../hooks/useFetchProducts";
import { subCategoryList } from "../constant";

import Banner from "../components/Banner";
import HomeContent from "../components/HomeContent";

import { ALink, Container, Div, H2, Img, Inner, Li, Loading, Nav, P, Section, Span, Ul } from "../styledComponents";

const Home = () => {
    const { loading } = useFetchProducts();

    return (
        <>
            <Banner />
            <Section id="home">
                <H2 className="blind">홈</H2>
                <Container>
                    <Inner className="inner">
                        <Div className="home">
                            {loading ? (
                                <Loading role="status" aria-live="polite">
                                    <P>로딩 중...</P>
                                </Loading>
                            ) : (
                                <>
                                    <Nav className="home_nav" role="navigation">
                                        <Ul className="home_nav_wrap">
                                            {subCategoryList.map((item) => (
                                                <Li key={item.text} className="home_nav_list">
                                                    <ALink
                                                        to={`/product/subcategory/${item.value}`}
                                                        className="home_nav_link"
                                                        role="link"
                                                        aria-label={`${item.text} 카테고리 보기`}
                                                    >
                                                        <Img src={item.src} alt="" className="home_nav_thumb" />
                                                        <Span className="home_nav_link_text">{item.text}</Span>
                                                    </ALink>
                                                </Li>
                                            ))}
                                        </Ul>
                                    </Nav>
                                    <HomeContent />
                                </>
                            )}
                        </Div>
                    </Inner>
                </Container>
            </Section>
        </>
    );
};

export default Home;
