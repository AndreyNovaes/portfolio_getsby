import React from 'react';
import {
  Box,
  useColorModeValue,
  Stack,
  Button,
  Image,
  Flex,
  Center
} from '@chakra-ui/react';
import MinhaFoto from '../../../images/staticImage';

export default function ImageBox() {
  return (
    <>
      <Center>
        <Box
          flexShrink={0}
          w={{ base: '300px', md: '500px' }}
          h={{ base: '300px', md: '500px' }}
          rounded={'2xl'}
          boxShadow={'2xl'}
          overflow={'hidden'}
        >
          <Box
            w="100%"
            h="100%"
            bgPosition="center"
            bgSize="cover"
            bgRepeat="no-repeat"
            objectFit='cover'
          >
            <MinhaFoto />
          </Box>
        </Box>
      </Center>
    </>
  );
}
