import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';

import '../scss/layout.scss';

const Layout = ({ children }) => (
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
            <div className="layout">
                <Header siteTitle={data.site.siteMetadata.title} />
                {children}
                <footer>
                    © 2018, Built with{' '}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </div>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
