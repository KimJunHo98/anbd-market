import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState("");

    const onChange = (e) => {
        setSearch(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        setSearch("");
    };

    return <SearchContext.Provider value={{ search, setSearch, onChange, onSubmit }}>{children}</SearchContext.Provider>;
};

export const useSearchContext = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error("반드시 SearchProvider 안에서 사용해야 합니다.");
    }
    return context;
};
