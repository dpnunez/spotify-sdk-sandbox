import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const UnauthenticatedApp = () => (
  <Switch>
    <Redirect to="/login" />
  </Switch>
);

export default UnauthenticatedApp;
