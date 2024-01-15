import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import GlobalStyles from "./GlobalStyles";

import AppRouter from "./components/AppRouter";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [useObj, setUseObj] = useState(null);
    const [isLoadingTimeout, setIsLoadingTimeout] = useState(0);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUseObj(user);
            } else {
                setUseObj(null);
            }
    
            const loadingTimeout = setTimeout(() => {
                setIsLoading(false);
            }, 3000);
    
            setIsLoadingTimeout(loadingTimeout);
        });
        
        return () => {
            clearTimeout(isLoadingTimeout);
            unsubscribe();
        };
    }, [isLoadingTimeout]);


    return (
        <>
            <GlobalStyles />
            <AppRouter isLoading={isLoading} isLogIn={Boolean(useObj)} useObj={useObj} />
        </>
    );
};

export default App;
