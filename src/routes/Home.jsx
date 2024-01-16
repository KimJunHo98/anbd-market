import React from "react";
import { homeCategory } from "../constant";
import { ALink, Container, Div, H2, Inner, Li, Section, Ul } from "../styledComponents";
import Banner from "../components/Banner";
import Search from "../components/Search";

const Home = () => {
    return (
        <>
            <Search />
            <Banner />
            <Section id="home">
                <H2 className="blind">홈</H2>
                <Container>
                    <Inner className="inner">
                        <Div className="home">
                            <Ul className="category_list">
                                {homeCategory.map((category) => (
                                    <Li className="category_items" key={category.text}>
                                        <ALink to={category.path} className="category_link">{category.text}</ALink>
                                    </Li>
                                ))}
                            </Ul>
                        </Div>
                    </Inner>
                </Container>
            </Section>
        </>
    );
};

export default Home;
