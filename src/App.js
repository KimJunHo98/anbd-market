import React from "react";
import { StateProvider } from "./context/useStateContext";
import { SearchProvider } from "./context/useSearchContext";
import GlobalStyles from "./GlobalStyles";
import AppRouter from "./components/AppRouter";

const App = () => {
    return (
        <StateProvider>
            <SearchProvider>
                <GlobalStyles />
                <AppRouter />
            </SearchProvider>
        </StateProvider>
    );
};

export default App;
