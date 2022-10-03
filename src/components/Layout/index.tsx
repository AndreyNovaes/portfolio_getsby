import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Nav from '../../components/Nav'
import OpacityLowDelay from '../../animations/noMovement/OpacityLowDelay'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ChakraProvider >
        <header>
          <Nav />
        </header>
        <main>
          <OpacityLowDelay>
            {children}
          </OpacityLowDelay>
        </main>
      </ChakraProvider>
    </>
  )
}