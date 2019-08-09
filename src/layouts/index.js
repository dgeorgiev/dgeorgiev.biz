import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../components/header';
import Transition from '../components/transition';

import '../scss/layout.scss';

const Layout = ({ children, location}) => {
    const inverted  = location.pathname === '/projects';

    return (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
                <Transition location={location}>
            <div className={`layout${inverted ? ' inverted' : ''}`}>
                    <div className="container">
                        <Header siteTitle={data.site.siteMetadata.title} />
                        {children}
                        <footer>
                            <p>2019 &copy; dgeorgiev.biz</p>
                            <nav className="navigation">
                                <a href="https://github.com/dgeorgiev">
                                    Github
                                </a>
                            </nav>
                        </footer>
                    </div>
                </div>
            </Transition>
        )}
    />
)
}
Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
