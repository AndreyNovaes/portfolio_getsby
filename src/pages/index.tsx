import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Nav from '../components/Nav'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <header>
      <ChakraProvider >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          <Nav />
        </motion.div> 
      </ChakraProvider>
    </header>
  )
}
