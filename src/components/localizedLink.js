import React from "react";
import { Link } from "gatsby";
import { LocaleContext } from "../layouts/index";
import locales from "../../config/i18n";

const LocalizedLink = ({ to, ...props }) => {
    const { locale } = React.useContext(LocaleContext);

    const isIndex = to === `/`;

    const path = locales[locale].default
        ? to
        : `${locales[locale].path}${isIndex ? `` : `${to}`}`;

    return <Link {...props} to={path} />;
};

export default LocalizedLink;
