import React from 'react';
import {
  Box,
  useColorModeValue,
  Stack,
  Button,
  Image,
  Center,
} from '@chakra-ui/react';
import TextBox from './AboutComponents/textBox';
import ImageBox from './AboutComponents/imageBox';

export default function About() {
  return (
    <>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ base: '10', md: '28' }}
        pb={{ base: '10', md: '20' }}
      >
        <Center>
          <TextBox />
        </Center>
        <ImageBox />
      </Stack>
    </>
  );
}
