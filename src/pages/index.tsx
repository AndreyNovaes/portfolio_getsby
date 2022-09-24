import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Nav from '../components/Nav'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import OpacityLowDelay from '../animations/NoMovementOpacity'

export default function Home() {
  return (
    <>
      <ChakraProvider >
        <header>
          <Nav />
        </header>
        <main>
          <OpacityLowDelay>
            <Hero />
          </OpacityLowDelay>
        </main>
      </ChakraProvider>
    </>
  )
}
