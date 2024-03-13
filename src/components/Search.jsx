import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearchContext } from "../context/useSearchContext";

import { Div, Input, Label, Form, Button, Icon } from "../styledComponents";
import { IoMdSearch } from "react-icons/io";
import { MdCancel } from "react-icons/md";

const Search = () => {
    const { search, setSearch, onChange, onSubmit } = useSearchContext();
    const location = useLocation();
    const navigate = useNavigate("");

    const isHomePage = location.pathname === "/";
    const searchLabel = isHomePage ? "홈페이지 검색 인풋" : "검색 인풋";

    const handleSearchCancelBtnClick = () => {
        setSearch("");
    };

    const homeSubmit = (e) => {
        e.preventDefault();

        navigate("/product");
    };

    return (
        <Div className="search">
            <Form className="search_form" onSubmit={isHomePage ? homeSubmit : onSubmit} role="form">
                <Label htmlFor="search_input" className="blind">
                    {searchLabel}
                </Label>
                <Input
                    id="search_input"
                    name="search_input"
                    className="search_input"
                    type="text"
                    placeholder="검색어를 입력하세요."
                    value={search}
                    onChange={onChange}
                    aria-label={searchLabel}
                />
                {search.length > 0 ? (
                    <Button
                        className="search_cancel_btn"
                        type="button"
                        onClick={handleSearchCancelBtnClick}
                        role="button"
                        aria-label="검색 취소 버튼"
                    >
                        <Icon className="search_cancel_icon" aria-hidden="true">
                            <MdCancel />
                        </Icon>
                    </Button>
                ) : null}
                <Button
                    className="search_btn"
                    type="submit"
                    role="button"
                    aria-label={isHomePage ? "홈페이지 검색 버튼" : "검색 버튼"} // 레이블 추가
                >
                    <Icon className="search_icon" aria-hidden="true">
                        <IoMdSearch />
                    </Icon>
                </Button>
            </Form>
        </Div>
    );
};

export default Search;
