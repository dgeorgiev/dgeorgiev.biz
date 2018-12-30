import PropTypes from 'prop-types';
import React from 'react';

const Header = () => <div />;

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ''
};

export default Header;
