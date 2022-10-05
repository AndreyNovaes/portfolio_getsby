import React from 'react'
import { ChakraProvider, Container } from '@chakra-ui/react'
import Nav from '../components/Nav'
import OpacityLowDelay from '../animations/noMovement/OpacityLowDelay'
import Footer from '../components/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ChakraProvider>
        <header>
          <Nav />
        </header>
        <main>
          <OpacityLowDelay>
            {children}
          </OpacityLowDelay>
        </main>
        <footer>
          <Footer />
        </footer>
      </ChakraProvider>
    </>
  )
}
