import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPage = () => (
    <Layout>
        <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
        <div>Hello I am Daniel Georgiev blog</div>
    </Layout>
);

export default BlogPage;
