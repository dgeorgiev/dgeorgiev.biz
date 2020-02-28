import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";

import "../scss/header.scss";
import logo from "../images/logo.svg";
import logoInverted from "../images/logo_inverted.svg";

import useTranslations from "../utils/useTranslations";
import LocalizedLink from "./localizedLink";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

import { Menu, MenuList, MenuButton, MenuLink } from "@reach/menu-button";

const Header = ({ siteTitle }) => {
    const { about, blog } = useTranslations();
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
                    {about}
                </LocalizedLink>
                <LocalizedLink
                    to="/blog"
                    activeClassName="active"
                    partiallyActive={true}
                >
                    {blog}
                </LocalizedLink>
                <Menu>
                    <MenuButton>
                        <FontAwesomeIcon
                            icon={faLanguage}
                            style={{ width: 32 }}
                        />
                    </MenuButton>
                    <MenuList>
                        <MenuLink as={Link} to="/" hrefLang="bg">
                            Български
                        </MenuLink>
                        <MenuLink as={Link} to="/en" hrefLang="en">
                            English
                        </MenuLink>
                    </MenuList>
                </Menu>
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
