import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Login, Callback } from "./pages";

const UnauthenticatedApp = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/callback" component={Callback} />
    <Redirect to="/login" />
  </Switch>
);

export default UnauthenticatedApp;
