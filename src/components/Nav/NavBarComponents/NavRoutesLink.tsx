import React from "react";
import { useColorModeValue, Link } from "@chakra-ui/react";
import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function NavRoutesLink({ children }: { children: ReactNode }) {
  return (
    <Link
      as="button"
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
      href={'#'}>
      {children}
    </Link>
  );
}
