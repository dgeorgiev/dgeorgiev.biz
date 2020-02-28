import React from "react";
import LocalizedLink from "./localizedLink";

function LatestFromBlog({ latestFromBlog }) {
    console.log(latestFromBlog);
    const { edges: elements } = latestFromBlog;
    console.log(elements);
    return (
        <section>
            <h2>Blog</h2>
            <div className="blog-list">
                {elements.map(({ node: element }) => (
                    <article key={element.id}>
                        <LocalizedLink to={`/${element.frontmatter.slug}`}>
                            <h3>{element.frontmatter.title}</h3>
                            <small>
                                {element.frontmatter.date}, {element.timeToRead}{" "}
                                min
                            </small>
                            <p>
                                In today article I will share a simple setup for
                                an app with user role based flows.
                            </p>
                        </LocalizedLink>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default LatestFromBlog;
