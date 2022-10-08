import React from 'react';
import {
  Box,
  useColorModeValue,
  Stack,
  Button,
  Image,
} from '@chakra-ui/react';

export default function About() {
  return (
    <>
      <Box
        bg={useColorModeValue('gray.50', 'inherit')}
        color={useColorModeValue('gray.700', 'gray.200')}
      >
        <Box
          px={{ base: '6', md: '8' }}
        >
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: '12', md: '28' }}
            align={{ md: 'center' }}
          >
            <Stack spacing="4" maxW={{ md: '2xl' }}>
              <Box
                fontSize={{ base: '3xl', md: '4xl' }}
                fontWeight="extrabold"
                letterSpacing="tight"
                lineHeight="normal"
              >
                <Box as="span" color={useColorModeValue('brand.600', 'brand.400')}>
                  Um pouco sobre mim
                </Box>
              </Box>
              <Box
                fontSize={{ base: 'md', md: 'lg' }}
                color={useColorModeValue('gray.500', 'gray.400')}
              >
                <Box as="span" color={useColorModeValue('brand.600', 'brand.400')}>
                  Olá, meu nome é Andrey Novaes, desenvolvedor web e mobile, apaixonado por tecnologia e
                  programação.
                </Box>
                <br />
                <Box as="span" color={useColorModeValue('brand.600', 'brand.400')}>
                  Formado no curso da Trybe, estou em busca da minha primeira oportunidade como desenvolvedor.
                </Box>
              </Box>
            </Stack>
            <Box
              w={{ base: 'full', md: '5xl' }}
              h={{ base: 'sm', md: 'lg' }}
              bg="brand.600"
              rounded="2xl"
              shadow="2xl"
              overflow="hidden"
            >
              <Image
                w="full"
                h="full"
                bgPosition="center"
                bgSize="cover"
                // src={myImage}
                alt="Uma foto minha com o meu cachorro dudu"
              />
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
