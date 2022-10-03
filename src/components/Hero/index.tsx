import React from 'react';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';
import TypewriterComponent from 'typewriter-effect';

export default function Hero() {
  return (
    <>
      <Container maxW={'4xl'}>
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
            <Text as={'span'} color={'blue.400'} maxW={400}>
              <TypewriterComponent
                options={{
                  strings: ['Desenvolvedor Full Stack', 'Eterno aprendiz', 'Em busca da excelência', 'Sempre aberto a novos desafios'],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </Text>

            <Text as={'span'} color={'green.400'}>
            </Text>
          </Heading>
          <Text color={'gray.500'} fontSize={'xl'}>
            Busco, por meio da tecnologia, estimular a excelência, da mesma forma que fui estimulado pelos meus mentores.
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
                >
                Conheça meu trabalho
              </Button>
              <Button colorScheme={'whatsapp'} rounded={'full'} size={'lg'} fontWeight={'normal'} px={6}>
                Entre em contato
              </Button>
            </Stack>
        </Stack>
      </Container>
    </>
  );
}