import React from 'react';

import SEO from '../components/seo';

const AboutPage = () => (
    <>
        <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
        <article className="home no-person">
            Say hi at me@dgeorgiev.biz
        </article>
    </>
);

export default AboutPage;
