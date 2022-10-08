import React from 'react';
import {
  Box,
  useColorModeValue,
  Stack,
  Button,
  Image,
  Text,
  Heading,
  Link
} from '@chakra-ui/react';
import { Link as gatsbyLink } from 'gatsby';

export default function TextBox() {
  return (
    <>
      <Stack spacing="4" maxW={{ md: '2xl' }}>
        <Heading 
          as="h1"
          fontSize={{ base: '3xl', md: '4xl' }}
          fontWeight="extrabold"
          letterSpacing="wide"
          lineHeight="shorter"
          color={useColorModeValue('gray.900', 'white')}
        >
          Como me interessei e conheci a programação
        </Heading>

        <Box
          fontSize={{ base: '3xl', md: '4xl' }}
          fontWeight="extrabold"
          letterSpacing="wide"
          lineHeight="tall"
        >
          <Box>
            <Box
              fontSize={{ base: 'md', md: 'lg' }}
              color={useColorModeValue('gray.500', 'gray.400')}
            >
              <Box as="p" color={useColorModeValue('brand.600', 'brand.400')}>
                Ex jogador profissional de e-sports, me vi desencantado e decidi buscar uma nova carreira, encontrei o&nbsp;
                <Link color='telegram.400' as={gatsbyLink} target='_blank' to='https://www.youtube.com/watch?v=S9uPNppGsGo&list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0&ab_channel=CursoemV%C3%ADdeo'  >
                  curso de python do Gustavo Guanabara
                </Link>
                &nbsp;no youtube, e, a partir daí que eu tive certeza que
                era isso que eu queria fazer da minha vida.
              </Box>
              <Box as="p" color={useColorModeValue('brand.600', 'brand.400')}>
                Entrei em uma faculdade de sistemas de informação, onde tive meu primeiro contato com a programação web, porém, não
                foi o suficiente para me satisfazer, era um curso lento, desatualizado e estático, queria algo mais dinâmico e rápido
                então comecei a pesquisar sobre outros cursos e ferramentas para estudar por conta própria, acabei encontrando o curso
                de desenvolvimento web da Trybe, onde aprendi a programar em javascript, react, node, entre outras tecnologias.
              </Box>
              <Box as="p" color={useColorModeValue('brand.600', 'brand.400')}>
                Me espelho em grandes mestres como o&nbsp;
                <Link color='telegram.400' as={gatsbyLink} target='_blank' to='https://www.youtube.com/c/RodrigoBranas'  >
                  Rodrigo Branas
                </Link>
                &nbsp;,&nbsp;
                <Link color='telegram.400' as={gatsbyLink} target='_blank' to='https://www.youtube.com/c/MangoDeveloper'  >
                  Rodrinho Manguinho
                </Link>
                &nbsp;,&nbsp;
                <Link color='telegram.400' as={gatsbyLink} target='_blank' to='https://www.youtube.com/c/FullCycle'  >
                  Wesley Willians
                </Link>
                &nbsp;e&nbsp;
                <Link color='telegram.400' as={gatsbyLink} target='_blank' to='https://www.youtube.com/user/OtavioALLemos'  >
                  Otavio Lemos
                </Link>
                &nbsp;e espero um dia chegar ao nível deles.
              </Box>
              <Box as="p" color={useColorModeValue('brand.600', 'brand.400')}>
                Tenho como objetivo principal me tornar um mentor e ajudar pessoas que estão começando agora como eu, e também ajudar pessoas que estão passando por dificuldades como eu passei.
              </Box>
            </Box>
          </Box>
        </Box>
      </Stack>
    </>
  );
}
