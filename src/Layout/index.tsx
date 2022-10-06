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
            <Container maxW="container.xl" p={0}>
              <VStack spacing={0} align="stretch">
                <Box as="main" flex="1">
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
