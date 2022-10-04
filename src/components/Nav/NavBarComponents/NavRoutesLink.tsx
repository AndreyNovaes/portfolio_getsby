import React from "react";
import { useColorModeValue, Link, Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link as GatsbyLink} from "gatsby";


export default function NavRoutesLink(props: { children: ReactNode; href: string }) {
  return (
    <Box 
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      _focus={{
        boxShadow: 'outline',
      }}
      width="auto"
    >
      <GatsbyLink to={props.href} style={{ textDecoration: "none", width:'auto' }}>
        {props.children}
      </GatsbyLink>
    </Box>
  );
}
      
    {/* <Link
      as={motion.a}
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      _focus={{
        boxShadow: 'outline',
      }}
      href={props.href}
    >
      {props.children}
    </Link> */}
