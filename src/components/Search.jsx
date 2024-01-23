import React, { useState } from "react";
import { Div, Input, Label, Form, Button } from "../styledComponents";

import { IoMdSearch } from "react-icons/io";

const Search = () => {
    const [search, setSearch] = useState("");

    const onChange = (e) => {
        setSearch(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        setSearch("");
    };

    return (
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
        </Div>
    );
};

export default Search;
