import React from 'react';

import SEO from '../components/seo';

const IndexPage = () => (
    <>
        <SEO title="Начало" keywords={['dgeorgiev', 'developer', 'full-stack developer', 'javascript', 'php', 'react']} />
        <article className="home">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>

            <p>C et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
        </article>
    </>
);

export default IndexPage;
