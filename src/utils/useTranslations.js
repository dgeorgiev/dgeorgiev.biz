import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { LocaleContext } from "../layouts";

const useTranslations = () => {
    const { locale } = React.useContext(LocaleContext);
    const { rawData } = useStaticQuery(query);

    const simplified = rawData.edges.map(item => {
        return {
            name: item.node.name,
            translations: item.node.translations
        };
    });

    const { translations } = simplified.filter(lang => lang.name === locale)[0];

    return translations;
};

export default useTranslations;

const query = graphql`
    query useTranslations {
        rawData: allFile(
            filter: { sourceInstanceName: { eq: "translations" } }
        ) {
            edges {
                node {
                    name
                    translations: childTranslationsJson {
                        projects
                        blog
                        about
                        contact_text
                        home_title
                        home_text_1
                        home_text_2
                        home_text_3
                        home_text_4
                        home_text_5
                        not_found
                    }
                }
            }
        }
    }
`;
