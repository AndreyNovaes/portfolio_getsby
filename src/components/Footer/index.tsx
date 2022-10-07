import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import NavSocialLinks from '../Nav/NavBarComponents/NavSocialLinks';
import LeftMiddleAnimation from '../../animations/movement/LeftMiddle';
import RightMiddleAnimation from '../../animations/movement/RightMiddle';

export default function Footer() {
  return (
    <Box
      borderTopColor={useColorModeValue('gray.200', 'gray.700')}
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        
        <LeftMiddleAnimation>
          <Text> 
            &copy; {new Date().getUTCFullYear()} - All rights reserved
          </Text>
        </LeftMiddleAnimation>

        <Stack direction={'row'} spacing={6}>
          <RightMiddleAnimation>
            <NavSocialLinks />
          </RightMiddleAnimation>
        </Stack>

      </Container>
    </Box>
  );
}
