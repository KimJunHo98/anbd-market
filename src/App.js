import React, { useEffect, useState } from "react";
import GlobalStyles from "./GlobalStyles";
import { auth } from "./firebase";

import AppRouter from "./components/AppRouter";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [useObj, setUseObj] = useState(null);

    useEffect(() => {
        const init = async () => {
            await auth.authStateReady(); // 인증상태 확인

            const user = auth.currentUser;

            if (user) {
                setUseObj(user);
            } else {
                setUseObj(null);
            }

            setIsLoading(false);
        };

        init();
    }, []);

    return (
        <>
            <GlobalStyles />
            <AppRouter isLoading={isLoading} isLogIn={Boolean(useObj)} useObj={useObj} />
        </>
    );
};

export default App;
