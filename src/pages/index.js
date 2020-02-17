import React from "react";

import SEO from "../components/seo";
import me from "../images/me.png";

import LocalizedLink from "../components/localizedLink";
import useTranslations from "../components/useTranslations";

const IndexPage = () => {
    const { hello } = useTranslations();

    return (
        <>
            <SEO
                title="Начало"
                keywords={[
                    "dgeorgiev",
                    "developer",
                    "full-stack developer",
                    "javascript",
                    "php",
                    "react"
                ]}
            />
            <article className="home">
                <p>Hi - I'm Daniel</p>
                <img src={me} />
                <p>{hello}</p>
            </article>
        </>
    );
};

export default IndexPage;
