import React from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Layout = ({ children }) => {
  return (
    <Box>
      <Box>
        <Header />
      </Box>
      <Box mt={8} ml={5}>
        {children}
      </Box>
    </Box>
  );
};

// the proptype ensures that the props passed to the parent component
// follows certain rules which we defined. In this case the prop that
// is passed is required field.
Layout.propTypes = propTypes;
export default Layout;
