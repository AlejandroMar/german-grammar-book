module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
        disableAutoprefixing: false,
        disableMinification: false,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve('./src/components/layout/layout.js'),
      },
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: 'MenuLink',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `data`,
      },
    },
    // TODO: add remark auto link headers
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `docs`,
      },
    },
  ],
};
