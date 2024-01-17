import React, { useState } from "react";
import { categoryList } from "../constant";
import { Container, Div, H2, Inner, Input, Label, Section, Form, Button, Ul, Li, Paginate } from "../styledComponents";

import { IoMdSearch } from "react-icons/io";

const Search = () => {
    const [search, setSearch] = useState("");

    const onChange = (e) => {
        setSearch(e.target.value);
        console.log(search);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        setSearch("");
    };

    return (
        <Section id="search">
            <H2 className="blind">검색</H2>
            <Container>
                <Inner className="inner">
                    <Div className="search">
                        <Form className="search_form" onSubmit={onSubmit}>
                            <Label htmlFor="search_input"></Label>
                            <Input
                                id="search_input"
                                name="search_input"
                                className="search_input"
                                type="text"
                                placeholder="검색어를 입력하세요."
                                value={search}
                                onChange={onChange}
                            ></Input>
                            <Button className="search_btn" type="submit">
                                <IoMdSearch className="search_icon" />
                            </Button>
                        </Form>
                        <Ul className="category_list">
                            {categoryList.map((category) => (
                                <Li className="category_items" key={category.text}>
                                    <Paginate to={category.path} className="category_link">
                                        {category.text}
                                    </Paginate>
                                </Li>
                            ))}
                        </Ul>
                    </Div>
                </Inner>
            </Container>
        </Section>
    );
};

export default Search;
