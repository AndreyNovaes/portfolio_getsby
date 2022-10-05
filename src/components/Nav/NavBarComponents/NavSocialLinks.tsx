import { Box, Flex, Link, useColorModeValue, IconButton } from "@chakra-ui/react"
import React from "react"
import Socials from "../../../assets/SocialMedias"

export default function NavSocialLinks() {
  return (
    <Flex>
      <Box>
        {Socials.map((social) => (
          <Link key={social.name} href={social.path} isExternal>
            <IconButton
              aria-label={social.name}
              icon={social.icon}
              variant="outline"
              size="lg"
              mr="2"
              ml="2"
              padding="2"
              fontSize="3xl"
              _hover={{ bg: useColorModeValue("gray.200", "gray.700") }}
            />
          </Link>
        ))}
      </Box>
    </Flex>
  )
}
