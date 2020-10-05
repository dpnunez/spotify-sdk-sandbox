import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { Login } from "./pages";

const AuthenticatedApp = () => (
  <Switch>
    <Redirect to="/dashboard" />
  </Switch>
);

export default AuthenticatedApp;
