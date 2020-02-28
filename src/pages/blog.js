import React from "react";

import SEO from "../components/seo";
import LatestFromBlog from "../components/latestFromBlog";

import useTranslations from "../utils/useTranslations";
import { graphql } from "gatsby";

const BlogPage = ({ data }) => {
    const { blog } = useTranslations();
    const { items } = data;
    return (
        <>
            <SEO title={blog} />
            <LatestFromBlog title={blog} items={items} />
        </>
    );
};

export default BlogPage;

export const query = graphql`
    query Blog($locale: String) {
        items: allMdx(
            filter: { fields: { locale: { eq: $locale } } }
            sort: { fields: frontmatter___date, order: DESC }
        ) {
            edges {
                node {
                    id
                    timeToRead
                    excerpt
                    frontmatter {
                        title
                        date(formatString: "DD.MM.YYYY")
                        slug
                    }
                    fields {
                        locale
                    }
                }
            }
        }
    }
`;
