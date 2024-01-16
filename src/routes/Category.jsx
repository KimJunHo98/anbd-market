import React from "react";
import Search from "../components/Search";
import { Container, Div, H2, Inner, Section } from "../styledComponents";

const Category = () => {
    return (
        <>
            <Search />
            <Section>
                <H2 className="blind">카테고리</H2>
                <Container>
                    <Inner>
                        <Div>Category</Div>
                    </Inner>
                </Container>
            </Section>
        </>
    );
};

export default Category;
