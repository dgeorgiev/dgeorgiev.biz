import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import '../scss/header.scss';
import logo from '../images/logo.svg';
import logoInverted from '../images/logo_inverted.svg';

const Header = ({ siteTitle }) => (
    <header className="header">
        <h1 className="logo">
            <Link to="/" title={siteTitle}>
                <img src={logo} alt="daniel georgiev" />
                <img src={logoInverted} alt="daniel georgiev" />
            </Link>
        </h1>
        <nav className="navigation">
            <Link to="/" activeClassName="active">
                bio
            </Link>
            <Link to="projects" activeClassName="active">
                projects
            </Link>
            <Link to="contacts" activeClassName="active">
                contacts
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
