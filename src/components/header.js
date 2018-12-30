import PropTypes from 'prop-types';
import React from 'react';

import '../scss/header.scss';

const Header = () => (
    <header className="header">
        <h1 className="logo">
            <strong>daniel</strong>georgiev
        </h1>
        <nav className="navigation">
            <a href="#">начало</a>
            <a href="#">проекти</a>
            <a href="#">за мен</a>
            <a href="#">блог</a>
        </nav>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ''
};

export default Header;
