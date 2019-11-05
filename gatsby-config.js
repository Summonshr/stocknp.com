module.exports = {
  siteMetadata: {
    title: 'Stock Np',
    siteUrl: 'https://stocknp.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'stock-np',
        short_name: 'StockNp',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-ND9HWLP",
        includeInDevelopment: false,
      },
    },
  ],
}
