import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import { styles } from "./styles";

const Theme = ({ theme = styles, children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.element
};

export default Theme;
