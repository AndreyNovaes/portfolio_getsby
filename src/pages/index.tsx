import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Simple from '../components/Nav'

export default function Home() {
  return (
    <ChakraProvider >
      <Simple />
    </ChakraProvider>
  )
}
