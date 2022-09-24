import React from 'react';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';
import TypewriterComponent from 'typewriter-effect';

export default function Hero() {
  return (
    <>
    <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Olá, eu sou o Andrey <br />
            <Text as={'span'} color={'blue.400'}>
              <TypewriterComponent
                options={{
                  strings: ['Desenvolvedor Full Stack', 'Eterno aprendiz', 'Em busca da excelência.'],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </Text>

            <Text as={'span'} color={'green.400'}>
            </Text>
          </Heading>
          <Text color={'gray.500'} fontSize={{ base: 'lg', lg: 'xl' }}>
            Sou um desenvolvedor apaixonado por tecnologia, buscando sempre me tornar uma pessoa melhor hoje do que fui ontem, com muito esforço, dedicação, e claro, muito café.
          </Text>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 4, md: 8 }}
            align={'center'}
            justify={'center'}>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'blue'}
                bg={'blue.400'}
                _hover={{ bg: 'blue.500' }}>
                Conheça meu trabalho
              </Button>
              <Button rounded={'full'} size={'lg'} fontWeight={'normal'} px={6}>
                Entre em contato
              </Button>
            </Stack>
        </Stack>
      </Container>
    </>
  );
}
