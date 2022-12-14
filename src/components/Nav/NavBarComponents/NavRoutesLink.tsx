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
      rounded={'full'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      _activeLink={{
        fontWeight: 'semibold',
        bg: useColorModeValue('gray.300', 'gray.700'),
      }}
      // active = {props.href === window.location.pathname}
      to={props.href}
    >
      {props.children}
    </Link>
  );
}
