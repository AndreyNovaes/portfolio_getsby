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
import { ChakraProvider, theme } from '@chakra-ui/react'

export const wrapPageElement = ({ element, props }) => {
  // Wraps every page in a component
  theme.config.initialColorMode = "dark"
  return (
    <>
      <ChakraProvider theme={theme}>
        <Layout {...props}>{element}</Layout>
      </ChakraProvider>
    </>
  )
};
// Layout config with gatsby wrapper
