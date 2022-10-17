import React from "react";
import { Box, Heading, Container, Text, Button, Stack, useDisclosure, Modal, Image, Tag, useColorModeValue, Center } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { Link as gatsbyLink } from "gatsby";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  id: Number;
  title: string;
  description: string;
  image: string;
  github: string;
  deploy: string;
  tags: string[];
}


export default function Projects({
  id,
  title,
  description,
  image,
  tags,
  github,
  deploy
}: Partial<Project>): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        key={title}
        bg={useColorModeValue('gray.200', 'gray.800')}
        maxW="lg"
        borderWidth="1px"
        borderRadius="lg"
        marginLeft="8px"
        // padding="4"
        _hover={{
          boxShadow: "2xl",
          transition: "all 0.5s ease-in-out",
          transform: "scale(1.04)",
          transitionTimingFunction: "cubic-bezier(0.075, 0.82, 0.165, 1)",
        }}
      >
        <Center>
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            placeholder="blurred"
            objectFit="cover"
          />
        </Center>
        <Box p="6">
          <Box
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            fontSize="lg"
            color={useColorModeValue("gray.800", "whiteAlpha.800")}
          >
            <Center>
              {title}
            </Center>
          </Box>

            <Box>
              <Center>
                <Text
                  // m="2"
                  fontSize="md"
                  color={useColorModeValue("gray.600", "gray.400")}
                >
                  {description}
                </Text>
              </Center>
            </Box>
          <Box alignItems="baseline">
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
            >
              {tags && tags.map((tag) => (
                <Tag size="sm" key={tag} className={tag} color={
                  useColorModeValue("gray.800", "whiteAlpha.800")
                }>
                  {tag}
                </Tag>
              ))}
            </Box>
          </Box>

          <Box mt="2" alignItems="center">
            <Center>
              {
                github && (
                <Button
                  as={gatsbyLink}
                  to={github}
                  size="sm"
                  colorScheme="blue"
                  _hover={{ bg: "blue.500" }}
                  leftIcon={<FaGithub />}
                  target="_blank"
                >
                  Github
                </Button>
                )
              }
              {
                deploy && (
                <Button
                  as={gatsbyLink}
                  to={deploy}
                  size="sm"
                  colorScheme="blue"
                  _hover={{ bg: "blue.500" }}
                  leftIcon={<FaExternalLinkAlt />}
                  target="_blank"
                >
                  Deploy
                </Button>
                )
              }
            </Center>
          </Box>
        </Box>
      </Box>
    </>
  );
}
