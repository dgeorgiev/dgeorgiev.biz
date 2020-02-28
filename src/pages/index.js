import React from "react";

import SEO from "../components/seo";
import LatestFromBlog from "../components/latestFromBlog";
import me from "../images/me.png";

import useTranslations from "../utils/useTranslations";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
    const {
        blog,
        home_title,
        home_text_1,
        home_text_2,
        home_text_3,
        home_text_4,
        home_text_5
    } = useTranslations();
    const { latestFromBlog } = data;
    return (
        <>
            <SEO title="За мен" keywords={["gatsby", "application", "react"]} />
            <article className="home-introduction">
                <div className="home-intro">
                    <h2>{home_title}</h2>
                    <p dangerouslySetInnerHTML={{ __html: home_text_1 }} />
                    <p dangerouslySetInnerHTML={{ __html: home_text_2 }} />
                    <p dangerouslySetInnerHTML={{ __html: home_text_3 }} />
                    <p dangerouslySetInnerHTML={{ __html: home_text_4 }} />
                    <p dangerouslySetInnerHTML={{ __html: home_text_5 }} />
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
