import React from 'react'
import { Box, ChakraProvider, Container, Flex, VStack } from '@chakra-ui/react'
import Nav from '../components/Nav'
import OpacityLowDelay from '../animations/noMovement/OpacityLowDelay'
import Footer from '../components/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ChakraProvider>
        <Box minH="100vh">
            <Nav />
            <OpacityLowDelay>
              {children}
            </OpacityLowDelay>
            <Footer />
        </Box>
      </ChakraProvider>
    </>
  )
}
