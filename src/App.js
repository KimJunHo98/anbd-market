import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import GlobalStyles from "./GlobalStyles";

import AppRouter from "./components/AppRouter";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [useObj, setUseObj] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUseObj(user);
            } else {
                setUseObj(null);
            }
        });

        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => {
            return () => {
                clearTimeout(timeoutId);
                unsubscribe();
            };
        };
    }, []);
    console.log(isLoading);

    return (
        <>
            <GlobalStyles />
            <AppRouter isLoading={isLoading} isLogIn={Boolean(useObj)} useObj={useObj} />
        </>
    );
};

export default App;
