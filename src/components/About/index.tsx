import React from 'react';
import {
  Box,
  useColorModeValue,
  Stack,
  Button,
  Image,
} from '@chakra-ui/react';
import TextBox from './AboutComponents/textBox';
import ImageBox from './AboutComponents/imageBox';

export default function About() {
  return (
    <>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: '10', md: '28' }}
      >
        <TextBox />
        <ImageBox />
      </Stack>
    </>
  );
}
