import React from "react";
import PropTypes from "prop-types";
import { UserProvider } from "./user-context";
import { PlayerProvider } from "./player-context";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <PlayerProvider>{children}</PlayerProvider>
    </UserProvider>
  );
};

Providers.propTypes = {
  children: PropTypes.element
};

export default Providers;
