import React from "react"

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
  }, 500)
}

export const onRouteUpdate = ({ location, prevLocation }) => {
  NProgress.configure({
    showSpinner: false,
    trickleSpeed: 150,
    minimum: 0.2,
  } as NProgressOptions)

  NProgress.start()
  setTimeout(() => {
    NProgress.done()
  }, 100)
}
// Nprogress config

// Layout config with gatsby wrapper
import Layout from './src/components/Layout'

export const wrapPageElement = ({ element, props }) => {
  // Wraps every page in a component
  return <Layout {...props}>{element}</Layout>;
};
// Layout config with gatsby wrapper
