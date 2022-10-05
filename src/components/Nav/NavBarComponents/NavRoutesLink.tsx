import React from "react";
import { useColorModeValue, Link } from "@chakra-ui/react";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link as gatsbyLink} from "gatsby";


export default function NavRoutesLink(props: { children: ReactNode; href: string }) {
  return (
    <Link
      as={gatsbyLink}
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      _focus={{
        fontWeight: 'semibold',
        boxShadow: 'outline',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      to={props.href}
    >
      {props.children}
    </Link>
  );
}
