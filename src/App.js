import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { useUser } from "./context/user-context";
import { Theme } from "./theme";

const loadAuthenticatedApp = () => import("./AuthenticatedApp");
const AuthenticatedApp = lazy(loadAuthenticatedApp);
const UnauthenticatedApp = lazy(() => import("./UnauthenticatedApp"));

const GlobalStyle = createGlobalStyle`
* {
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
}
button, a {
  cursor: pointer;
  &:disabled{
    cursor: not-allowed;
  }
}
`;

const App = () => {
  const { userInfo } = useUser();

  useEffect(() => {
    loadAuthenticatedApp();
  }, []);

  console.log(userInfo);

  return (
    <Theme>
      <main>
        <GlobalStyle />
        <Suspense fallback={<div>loading</div>}>
          <Router>
            {userInfo ? <AuthenticatedApp /> : <UnauthenticatedApp />}
          </Router>
        </Suspense>
      </main>
    </Theme>
  );
};

export default App;
