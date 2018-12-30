import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
        <div>Hello I am Daniel Georgiev</div>
    </Layout>
);

export default IndexPage;
