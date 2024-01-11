import React, { useEffect, useState } from "react";
import GlobalStyles from "./GlobalStyles";
import { auth } from "./firebase";

import AppRouter from "./components/AppRouter";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const init = async () => {
            await auth.authStateReady(); // 인증상태 확인
    
            setIsLoading(false);
        };

        init();
    }, []);

    return (
        <>
            <GlobalStyles />
            <AppRouter isLoading={isLoading} />
        </>
    );
};

export default App;
