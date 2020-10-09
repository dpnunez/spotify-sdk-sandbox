import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { useUser } from "./context/user-context";
import { Theme } from "./theme";

const loadAuthenticatedApp = () => import("./AuthenticatedApp");
const AuthenticatedApp = lazy(loadAuthenticatedApp);
const UnauthenticatedApp = lazy(() => import("./UnauthenticatedApp"));

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    background-color: ${({ theme }) => theme.palette.bgColor}
  }
  * {
    scrollbar-width: thin;
    scrollbar-color: blue orange;
    border: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Roboto'
  }
  button, a {
    cursor: pointer;
    &:disabled{
      cursor: not-allowed;
    }
  }

  span, p {
    font-size: 18px;
  }

  h1 {
    font-size: 38px;
  }

  /* Works on Chrome/Edge/Safari */
  *::-webkit-scrollbar {
    width: 8px;
  }
  *::-webkit-scrollbar-track {
    background: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #FFFFFF44;
    border-radius: 20px;
    margin: 0 2px;
  }
`;

const App = () => {
  const { userInfo } = useUser();

  useEffect(() => {
    loadAuthenticatedApp();
  }, []);

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
