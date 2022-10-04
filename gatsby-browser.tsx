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

