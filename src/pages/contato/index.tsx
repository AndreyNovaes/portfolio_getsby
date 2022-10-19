import React, { useState, useRef } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Center,
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import NavSocialLinks from '../../components/Nav/NavBarComponents/NavSocialLinks';

export default function Contacts () {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const form = useRef();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTimeout(() => {
      setIsLoading(true);
    }, 200);

    console.log(e.currentTarget);

    // emailjs
    //   .sendForm(
    //     'service_l2jnt09',
    //     'template_bp97yus',
    //     e.currentTarget,
    //     '5tVgKCa90p2ofQIaN'
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
      e.currentTarget.reset();
  }

  return (
    <Box as="section" bg={useColorModeValue('gray.50', 'gray.800')} py="12">
      <Box maxW="7xl" mx="auto" px={{ base: '6', lg: '8' }}>
        <Box textAlign="center">
          <Box
            as="span"
            fontSize="sm"
            textTransform="uppercase"
            fontWeight="extrabold"
            letterSpacing="wide"
            marginBottom={8}
            color={useColorModeValue('brand.600', 'brand.200')}
          >
            Contate-me
          </Box>
          <Box
            as="h2"
            fontSize="3xl"
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="9"
            color={useColorModeValue('gray.900', 'white')}
          >
            Me mande uma mensagem
          </Box>
        </Box>
        <Box mt="4">
          <Box
            as="form"
            ref={form as any}
            onSubmit={sendEmail as any}
            maxW="3xl"
            mx="auto"
            w="full"
            bg={useColorModeValue('white', 'gray.700')}
            shadow="xl"
            rounded="lg"
            overflow="hidden"
          >
            <Stack
              direction={{ base: 'column', md: 'row' }}
              px="6"
              py="4"
              bg={useColorModeValue('gray.50', 'gray.800')}
              spacing="4"
            >
              <FormControl id="name" isRequired >
                <FormLabel>Nome</FormLabel>
                <Input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  bg={useColorModeValue('white', 'gray.700')}
                  border="0"
                  color={useColorModeValue('gray.500', 'gray.400')}
                  _placeholder={{
                    color: useColorModeValue('gray.500', 'gray.400'),
                  }}
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  bg={useColorModeValue('white', 'gray.700')}
                  border="0"
                  color={useColorModeValue('gray.500', 'gray.400')}
                  _placeholder={{
                    color: useColorModeValue('gray.500', 'gray.400'),
                  }}
                />
              </FormControl>
            </Stack>
            <Box px="6" py="4" bg={useColorModeValue('gray.50', 'gray.800')}>
              <FormControl id="message" isRequired>
                <FormLabel>Mensagem</FormLabel>
                <Input
                  as="textarea"
                  name="message"
                  rows={4}
                  placeholder="Mensagem"
                  bg={useColorModeValue('white', 'gray.700')}
                  border="0"
                  color={useColorModeValue('gray.500', 'gray.400')}
                  _placeholder={{
                    color: useColorModeValue('gray.500', 'gray.400'),
                  }}
                />
              </FormControl>
            </Box>
            <Flex
              px="6"
              py="1"
              bg={useColorModeValue('gray.50', 'gray.800')}
              justify="center"
            >
              <Button 
                isLoading={isLoading}
                type="submit" 
                colorScheme="blue" 
                size="sm"
                loadingText="Enviando"
                variant="solid"
                >
                  Enviar
              </Button>
            </Flex>
          </Box>
          <Box textAlign="center" mt="4">
            <Box
              as="h2"
              fontSize="3xl"
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="9"
              color={useColorModeValue('gray.500', 'gray.400')}
            >
              Ou, se preferir, contate-me pelas minhas redes sociais
            </Box>
              <Stack justifyContent={'center'} direction="row" spacing="4" mt="4">
                <NavSocialLinks />
              </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
