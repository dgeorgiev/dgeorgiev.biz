import React from "react";

import SEO from "../components/seo";
import useTranslations from "../utils/useTranslations";

const NotFoundPage = () => {
    const { not_found } = useTranslations();
    return (
        <>
            <SEO title="404: Not found" />
            <h1>{not_found}</h1>
        </>
    );
};

export default NotFoundPage;
