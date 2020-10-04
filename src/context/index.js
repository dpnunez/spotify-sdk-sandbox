import React from "react";
import PropTypes from "prop-types";
import { UserProvider } from "./user-context";

const Providers = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

Providers.propTypes = {
  children: PropTypes.element
};

export default Providers;
