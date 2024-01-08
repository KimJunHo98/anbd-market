import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import CreateAccount from "./components/CreateAccount";

import "./assets/scss/style.scss";

const App = () => {
  const [isloading, setIsLoading] = useState(true);

  const init = async() => {
    await auth.authStateReady(); // 인증상태 확인

    setIsLoading(false);
  }

  useEffect(() => {
    init();
  }, [])

  return (
    <div id="wrap">
      {!isloading ? <CreateAccount /> : "stay"}
    </div>
  );
}

export default App;
