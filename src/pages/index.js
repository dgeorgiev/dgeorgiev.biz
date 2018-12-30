import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO title="Начало" keywords={['dgeorgiev', 'developer', 'full-stack developer', 'javascript', 'php', 'react']} />
        <section className="lead">
        </section>
        <section>
            <h3>Последно от блог</h3>
            <article>
                <h1>Някаква статия</h1>

            </article>
        </section>
    </Layout>
);

export default IndexPage;
