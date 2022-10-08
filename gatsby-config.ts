import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Andrey Novaes`,
    description: `Andrey De Novaes Ferreira portfolio, personal website`,
  },
  graphqlTypegen: true,
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
        icon: `./src/assets/images/portfolio.png`,
      },
    },
  ],
}

export default config
