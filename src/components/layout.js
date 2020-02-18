import React from "react";
import PropTypes from "prop-types";

import Header from "../components/header";

import { MDXProvider } from "@mdx-js/react";
import MdxLink from "../components/mdxLink";

const LocaleContext = React.createContext();

const Layout = ({ children, location, pageContext }) => {
    const inverted = location.pathname.includes("/projects");
    const locale =
        pageContext && pageContext.locale ? pageContext.locale : "bg";

    return (
        <LocaleContext.Provider value={{ locale }}>
            <MDXProvider components={{ a: MdxLink }}>
                <div className={`layout${inverted ? " inverted" : ""}`}>
                    <Header />
                    <div className="container">
                        {children}
                        <footer>
                            <p>2020 &copy; dgeorgiev.biz</p>
                            <nav className="navigation">
                                <a href="https://github.com/dgeorgiev">
                                    Github
                                </a>
                            </nav>
                        </footer>
                    </div>
                </div>
            </MDXProvider>
        </LocaleContext.Provider>
    );
};
Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export { Layout, LocaleContext };
export default Layout;
