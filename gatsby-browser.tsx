import React from "react"
import './src/styles/global.css'

// Nprogress config
import NProgress, { NProgressOptions } from "nprogress"

export const onInitialClientRender = () => {
  NProgress.configure({
    showSpinner: false,
    trickleSpeed: 70,
    minimum: 0.3,
  } as NProgressOptions)

  NProgress.start()
  setTimeout(() => {
    NProgress.done()
  }, 200)
}

export const onRouteUpdate = ({ location, prevLocation }) => {
  NProgress.configure({
    showSpinner: false,
    trickleSpeed: 100,
    minimum: 0.2,
  } as NProgressOptions)

  NProgress.start()
  setTimeout(() => {
    NProgress.done()
  }, 100)
}
// Nprogress config

// Layout config with gatsby wrapper
import Layout from './src/Layout'
import { ChakraProvider, ColorModeScript, extendTheme, ThemeConfig, useColorModePreference } from '@chakra-ui/react'
import { Helmet } from "react-helmet"

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
}

const customTheme = extendTheme({ config })

export const wrapPageElement = ({ element, props }) => {
  // Wraps every page in a component

  return (
    <>
      <ChakraProvider theme={customTheme}>
        <Layout {...props}>
          <Helmet>
            <title>Andrey Novaes</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Andrey Novaes portfolio" />
            <meta name="keywords" content="Andrey Novaes, Andrey Novaes portfolio, Andrey Novaes site, Andrey De Novaes Ferreira portfolio, Andrey personal website, Andrey De Novaes Ferreira personal website, Andrey De Novaes Ferreira" />
            <meta name="author" content="Andrey Novaes" />
            <meta property="og:title" content="Andrey Novaes portfólio" />
            <meta property="og:description" content="portfólio de Andrey Novaes" />
            <meta property="og:url" content="https://andrey-novaes.me" />
            <meta property="og:site_name" content="Andrey Novaes portfólio" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="pt-BR" />
            <link rel="canonical" href="https://andrey-novaes.me" />
          </Helmet>
          {element}
        </Layout>
      </ChakraProvider>
    </>
  )
};
