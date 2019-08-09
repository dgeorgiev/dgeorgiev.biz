import React from 'react';

import SEO from '../components/seo';

const IndexPage = () => (
    <>
        <SEO title="Начало" keywords={['dgeorgiev', 'developer', 'full-stack developer', 'javascript', 'php', 'react']} />
        <article className="home">
            <p>Hi - I'm Daniel</p>
        </article>
    </>
);

export default IndexPage;
