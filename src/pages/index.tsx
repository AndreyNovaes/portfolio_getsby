import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

export default function Home() {
  // o wrapper ja foi setado no gatsby-browser.tsx
  return (
    <>
      <Hero />
    </>
  )
}
