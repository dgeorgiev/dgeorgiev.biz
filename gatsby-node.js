const path = require(`path`);
const locales = require(`./config/i18n`);
const {
    localizedSlug,
    findKey,
    removeTrailingSlash
} = require(`./src/utils/gatsby-node-helpers`);

exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions;

    // First delete the incoming page that was automatically created by Gatsby
    // So everything in src/pages/
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

// As you don't want to manually add the correct languge to the frontmatter of each file
// a new node is created automatically with the filename
// It's necessary to do that -- otherwise you couldn't filter by language
exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;

    // Check for "Mdx" type so that other files (e.g. images) are exluded
    if (node.internal.type === `Mdx`) {
        // Use path.basename
        // https://nodejs.org/api/path.html#path_path_basename_path_ext
        const name = path.basename(node.fileAbsolutePath, `.mdx`);

        // Check if post.name is "index" -- because that's the file for default language
        // (In this case "en")
        const isDefault = name === `index`;

        // Find the key that has "default: true" set (in this case it returns "en")
        const defaultKey = findKey(locales, o => o.default === true);

        // Files are defined with "name-with-dashes.lang.mdx"
        // name returns "name-with-dashes.lang"
        // So grab the lang from that string
        // If it's the default language, pass the locale for that
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
