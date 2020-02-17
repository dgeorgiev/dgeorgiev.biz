import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";

import "../scss/header.scss";
import logo from "../images/logo.svg";
import logoInverted from "../images/logo_inverted.svg";
import useTranslations from "./useTranslations";
import LocalizedLink from "./localizedLink";

const Header = ({ siteTitle }) => {
    const { nav_home, nav_projects, nav_about, nav_blog } = useTranslations();
    return (
        <header className="header">
            <h1 className="logo">
                <LocalizedLink to="/" title={siteTitle}>
                    <img src={logo} alt="daniel georgiev" />
                    <img src={logoInverted} alt="daniel georgiev" />
                </LocalizedLink>
            </h1>
            <nav className="navigation">
                <LocalizedLink to="/" activeClassName="active">
                    {nav_home}
                </LocalizedLink>
                <LocalizedLink
                    to="contacts"
                    activeClassName="active"
                    partiallyActive={true}
                >
                    {nav_about}
                </LocalizedLink>
                <LocalizedLink
                    to="blog"
                    activeClassName="active"
                    partiallyActive={true}
                >
                    {nav_blog}
                </LocalizedLink>
                <Link to="/" hrefLang="bg">
                    bg
                </Link>
                {` `}/{` `}
                <Link to="/en" hrefLang="en">
                    en
                </Link>
            </nav>
        </header>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ""
};

export default Header;
