import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearchContext } from "../context/useSearchContext";

import { Div, Input, Label, Form, Button } from "../styledComponents";
import { IoMdSearch } from "react-icons/io";
import { MdCancel } from "react-icons/md";

const Search = () => {
    const { search, setSearch, onChange, onSubmit } = useSearchContext();
    const location = useLocation();
    const navigate = useNavigate("");

    const isHomePage = location.pathname === "/";

    const handleSearchCancelBtnCLick = () => {
        setSearch("");
    };

    const homeSubmit = (e) => {
        e.preventDefault();

        navigate("/product");
    };

    return (
        <Div className="search">
            {isHomePage ? (
                <Form className="search_form" onSubmit={homeSubmit}>
                    <Label htmlFor="search_input" className="blind">
                        검색 인풋
                    </Label>
                    <Input
                        id="search_input"
                        name="search_input"
                        className="search_input"
                        type="text"
                        placeholder="검색어를 입력하세요."
                        value={search}
                        onChange={onChange}
                    ></Input>
                    {search.length > 0 ? (
                        <Button className="search_cancel_btn" type="button" onClick={handleSearchCancelBtnCLick}>
                            <MdCancel className="search_cancel_icon" />
                        </Button>
                    ) : null}
                    <Button className="search_btn" type="submit">
                        <IoMdSearch className="search_icon" />
                    </Button>
                </Form>
            ) : (
                <Form className="search_form" onSubmit={onSubmit}>
                    <Label htmlFor="search_input" className="blind">
                        검색 인풋
                    </Label>
                    <Input
                        id="search_input"
                        name="search_input"
                        className="search_input"
                        type="text"
                        placeholder="검색어를 입력하세요."
                        value={search}
                        onChange={onChange}
                    ></Input>
                    {search.length > 0 ? (
                        <Button className="search_cancel_btn" type="button" onClick={handleSearchCancelBtnCLick}>
                            <MdCancel className="search_cancel_icon" />
                        </Button>
                    ) : null}
                    <Button className="search_btn" type="submit">
                        <IoMdSearch className="search_icon" />
                    </Button>
                </Form>
            )}
        </Div>
    );
};

export default Search;
