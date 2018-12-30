import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import '../scss/header.scss';

const Header = ({ siteTitle }) => (
    <header className="header">
        <h1 className="logo">
            <Link to="/" title={siteTitle}>
                <strong>daniel</strong>georgiev
            </Link>
        </h1>
        <nav className="navigation">
            <Link to="/" activeClassName="active">
                начало
            </Link>
            <Link to="projects" activeClassName="active">
                проекти
            </Link>
            <Link to="about" activeClassName="active">
                за мен
            </Link>
            <Link to="blog" activeClassName="active">
                блог
            </Link>
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
