import React from 'react'
import { Box, ChakraProvider, Container, Flex, VStack, Spacer } from '@chakra-ui/react'
import Nav from '../components/Nav'
import OpacityLowDelay from '../animations/noMovement/OpacityLowDelay'
import Footer from '../components/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ChakraProvider>
        <Flex direction="column" minH="100vh">
          <Nav />
          <Spacer />
          <OpacityLowDelay>
            <Container maxW="container.xl">
              <VStack align="stretch">
                <Box as="main">
                  {children}
                </Box>
              </VStack>
            </Container>
          </OpacityLowDelay>
          <Spacer />
          <Footer />
        </Flex>
      </ChakraProvider>
    </>
  )
}
