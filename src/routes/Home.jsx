import React from "react";
import Banner from "../components/Banner";
import Search from "../components/Search";
import { Container, Div, H2, Inner, Section } from "../styledComponents";

const Home = () => {
    return (
        <>
            <Search />
            <Banner />
            <Section id="home">
              <H2 className="blind">홈</H2>
                <Container>
                    <Inner>
                        <Div className="home">
                          home
                        </Div>
                    </Inner>
                </Container>
            </Section>
        </>
    );
};

export default Home;
