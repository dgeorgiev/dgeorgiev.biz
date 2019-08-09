import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom'

import '../scss/header.scss';
import logo from '../images/logo.svg';
import logoInverted from '../images/logo_inverted.svg';

const Header = ({ siteTitle }) => (
    <header className="header">
        <h1 className="logo">
            <NavLink to="/" title={siteTitle}>
                <img src={logo} alt="daniel georgiev" />
                <img src={logoInverted} alt="daniel georgiev" />
            </NavLink>
        </h1>
        <nav className="navigation">
            <NavLink to="/" activeClassName="active">
                bio
            </NavLink>
            <NavLink to="projects" activeClassName="active">
                projects
            </NavLink>
            <NavLink to="contacts" activeClassName="active">
                contacts
            </NavLink>
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
