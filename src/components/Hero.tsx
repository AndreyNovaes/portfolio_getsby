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
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}>
              Veja meus Trabalhos
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
