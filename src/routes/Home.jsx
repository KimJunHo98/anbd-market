import React from "react";
import Banner from "../components/Banner";
import Product from "./Product";
import { Container, Div, H2, Inner, Section } from "../styledComponents";


const Home = () => {
    return (
        <>
            <Banner />
            <Section id="home">
                <H2 className="blind">홈</H2>
                <Container>
                    <Inner className="inner">
                        <Div className="home">
                            <Product />
                        </Div>
                    </Inner>
                </Container>
            </Section>
        </>
    );
};

export default Home;
