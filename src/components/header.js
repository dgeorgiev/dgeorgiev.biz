import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import '../scss/header.scss';
import logo from '../images/logo.svg';

const Header = ({ siteTitle }) => (
    <header className="header">
        <h1 className="logo">
            <Link to="/" title={siteTitle}>
                {/* <strong>daniel</strong>georgiev */}
                <img src={logo} alt="daniel georgiev" />
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
