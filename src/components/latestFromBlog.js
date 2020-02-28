import React from "react";
import LocalizedLink from "./localizedLink";

function LatestFromBlog({ title, items }) {
    const { edges: elements } = items;
    return (
        <section>
            <h2>{title}</h2>
            <div className="blog-list">
                {elements.map(({ node: element }) => (
                    <article key={element.id}>
                        <LocalizedLink to={`/${element.frontmatter.slug}`}>
                            <h3>{element.frontmatter.title}</h3>
                            <small>
                                {element.frontmatter.date}, {element.timeToRead}{" "}
                                min
                            </small>
                            <p>{element.excerpt}</p>
                        </LocalizedLink>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default LatestFromBlog;
