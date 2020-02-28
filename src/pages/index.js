import React from "react";

import SEO from "../components/seo";
import LatestFromBlog from "../components/latestFromBlog";
import me from "../images/me.png";

import useTranslations from "../utils/useTranslations";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
    const { blog, contact_text } = useTranslations();
    const { latestFromBlog } = data;
    return (
        <>
            <SEO title="За мен" keywords={["gatsby", "application", "react"]} />
            <article className="home-introduction">
                <div className="home-intro">
                    <h2>Hi, I'm Daniel.</h2>
                    <p>
                        Full Stack developer with <strong>10+ years</strong> of
                        experience in{" "}
                        <strong>JS/TypeScript, PHP, HTML, CSS/Sass</strong>.
                    </p>
                    <p>
                        My main focus at the moment is on{" "}
                        <strong>
                            React, React Native, Gatsby, NextJS, Laravel,
                            Symfony
                        </strong>
                        .{" "}
                    </p>
                    <p>
                        Currently I'm working with people from small and medium
                        business
                        <br />
                        launch or expand their ideas/projects at my own digital
                        agency{" "}
                        <a href="https://dabanny.com">
                            <strong>dabanny.com</strong>
                        </a>
                        .
                    </p>
                    <p>
                        I'm also a part of the team behind an exciting sport
                        <br />
                        platform that facilitates all parties in the sport
                        <br />
                        service delivery process – providers and users{" "}
                        <a href="https://sportpoint.bg">
                            <strong>sportpoint.bg</strong>
                        </a>
                        .
                    </p>
                    <p>
                        Previously at Clippings.com, PFSWeb (LiveArea Europe),
                        EPAM, Powerty, Cog Graphics.
                    </p>
                    <p>
                        In my free time I enjoy spending time with my family,
                        <br />
                        watching motosports (formula1, motogp) and playing games
                        <br />
                        Occasionally enduro riding or track days with my miata.
                    </p>
                </div>
                <div className="home-photo">
                    <img src={me} />
                </div>
            </article>
            <LatestFromBlog title={blog} items={latestFromBlog} />
        </>
    );
};

export default IndexPage;

export const query = graphql`
    query LatestFromBlog($locale: String) {
        latestFromBlog: allMdx(
            filter: { fields: { locale: { eq: $locale } } }
            limit: 3
            sort: { fields: frontmatter___date, order: DESC }
        ) {
            edges {
                node {
                    id
                    timeToRead
                    excerpt
                    frontmatter {
                        title
                        date(fromNow: true)
                        slug
                        image
                    }
                    fields {
                        locale
                    }
                }
            }
        }
    }
`;
