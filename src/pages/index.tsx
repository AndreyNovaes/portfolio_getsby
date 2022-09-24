import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Nav from '../components/Nav'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <header>
      <ChakraProvider >
        <Nav />
        <Hero />
      </ChakraProvider>
    </header>
  )
}
