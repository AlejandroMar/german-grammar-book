module.exports = {
  plugins: [
    'gatsby-theme-language-book',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Idiomatica School`,
        short_name: `Idiomatica`,
        start_url: `/`,
        display: `standalone`,
        icon: `images/favicon.png`,
      },
    },
  ],
}
