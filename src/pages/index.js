import React from "react";

import SEO from "../components/seo";
import me from "../images/me.png";

import useTranslations from "../utils/useTranslations";

const IndexPage = () => {
    const { hello } = useTranslations();

    return (
        <>
            <article className="home">
                <p>Hi - I'm Daniel</p>
                <img src={me} />
                <p>{hello}</p>
            </article>
        </>
    );
};

export default IndexPage;
