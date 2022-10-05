import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Projects from '../../components/Projects'
import Layout from '../../Layout'

export default function Projetos() {
  // o wrapper ja foi setado no gatsby-browser.tsx
  return (
    <>
      <Projects />
    </>
  )
}
