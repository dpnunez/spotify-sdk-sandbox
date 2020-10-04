import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { useUser } from "./context/user-context";

const loadAuthenticatedApp = () => import("./AuthenticatedApp");
const AuthenticatedApp = lazy(loadAuthenticatedApp);
const UnauthenticatedApp = lazy(() => import("./UnauthenticatedApp"));

const App = () => {
  const { userInfo } = useUser();

  useEffect(() => {
    loadAuthenticatedApp();
  }, []);

  console.log(userInfo);

  return (
    <main>
      <Suspense fallback={<div>loading</div>}>
        <Router>
          {userInfo ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </Router>
      </Suspense>
    </main>
  );
};

export default App;
