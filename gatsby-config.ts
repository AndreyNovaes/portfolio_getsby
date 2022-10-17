import type { GatsbyConfig } from "gatsby"

const siteMetadata = {
  favIcon: `./src/images/portfolio.png`,
  siteUrl: 'https://www.andrey-novaes.me',
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Andrey Novaes`,
    description: `Andrey De Novaes Ferreira portfolio, personal website`,
  },
  plugins: [
    {
      resolve: `@chakra-ui/gatsby-plugin`,
      options: {
        isUsingColorMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#718096`, // color of the progress bar
        minimum: 0.8,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andrey Novaes`,
        short_name: `Andrey Novaes`,
        start_url: `/`,
        icon: siteMetadata.favIcon,
      },
    },
    {
      resolve: `gatsby-plugin-image`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
  ],
}

export default config
