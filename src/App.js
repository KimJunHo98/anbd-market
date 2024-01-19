import React from "react";
import { StateProvider } from "./context/useStateContext";
import GlobalStyles from "./GlobalStyles";
import AppRouter from "./components/AppRouter";

const App = () => {
    return (
        <StateProvider>
            <GlobalStyles />
            <AppRouter />
        </StateProvider>
    );
};

export default App;
