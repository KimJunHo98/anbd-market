import React from "react";
import { useSearchContext } from "../context/useSearchContext";

import { Div, Input, Label, Form, Button } from "../styledComponents";
import { IoMdSearch } from "react-icons/io";

const Search = () => {
    const { search, onChange, onSubmit } = useSearchContext();

    return (
        <Div className="search">
            <Form className="search_form" onSubmit={onSubmit}>
                <Label htmlFor="search_input" className="blind">검색 인풋</Label>
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
