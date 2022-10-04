import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
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
        // Setting a color is optional.
        color: `#718096`,
        minimum: 0.8,
        showSpinner: false,
      },
    },
  ],
}

export default config
