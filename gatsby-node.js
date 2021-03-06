const path = require(`path`);
const locales = require(`./config/i18n`);
const {
    localizedSlug,
    findKey,
    removeTrailingSlash
} = require(`./src/utils/gatsby-node-helpers`);

exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions;
    deletePage(page);

    Object.keys(locales).map(lang => {
        const localizedPath = locales[lang].default
            ? page.path
            : `${locales[lang].path}${page.path}`;
        return createPage({
            ...page,
            path: removeTrailingSlash(localizedPath),
            context: {
                ...page.context,
                locale: lang,
                dateFormat: locales[lang].dateFormat
            }
        });
    });
};
exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `Mdx`) {
        const name = path.basename(node.fileAbsolutePath, `.mdx`);
        const isDefault = name === `index`;
        const defaultKey = findKey(locales, o => o.default === true);
        const lang = isDefault ? defaultKey : name.split(`.`)[1];

        createNodeField({ node, name: `locale`, value: lang });
        createNodeField({ node, name: `isDefault`, value: isDefault });
    }
};

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const postTemplate = require.resolve(`./src/templates/post.js`);

    const result = await graphql(`
        {
            blog: allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
                edges {
                    node {
                        relativeDirectory
                        childMdx {
                            fields {
                                locale
                                isDefault
                            }
                            frontmatter {
                                title
                            }
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) {
        console.error(result.errors);
        return;
    }

    const postList = result.data.blog.edges;

    postList.forEach(({ node: post }) => {
        const slug = post.relativeDirectory;

        const title = post.childMdx.frontmatter.title;

        const locale = post.childMdx.fields.locale;
        const isDefault = post.childMdx.fields.isDefault;

        createPage({
            path: localizedSlug({ isDefault, locale, slug }),
            component: postTemplate,
            context: {
                locale,
                title
            }
        });
    });
};
