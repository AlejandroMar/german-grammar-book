/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-mdx`,
    /* {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
      },
    }, */
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve("./src/components/layout.js"),
      },
    },
  ],
}
