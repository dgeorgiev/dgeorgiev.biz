import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => <div>{children}</div>;

Layout.propTypes = {
    children: PropTypes.any
};

export default Layout;
