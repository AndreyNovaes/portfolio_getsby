import { ReactNode } from 'react';
import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Icon,
  Slide,
  Switch,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NavLink from './NavRoutesLink';
import { GrConfigure } from 'react-icons/gr';
import { FaMoon, FaSun } from 'react-icons/fa';
import ColorModeSwitcher from './ColorModeSwitcher';
import NavRoutesLink from './NavRoutesLink';
import NavSocialLinks from './NavSocialLinks';

const Links = ['Home', 'Sobre', 'Projetos'];

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>

{/* Dropdown Menu Web(left side of the Nav) */}
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavRoutesLink key={link}>{link}</NavRoutesLink>
              ))}
            </HStack>
          </HStack>
{/* Dropdown Menu Web(left side of the Nav) */}

{/* Social Icons Web, middle of the Nav */}
          <Flex alignItems={'center'}>  
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
                <Box >
                  <NavSocialLinks />
                </Box> 
            </HStack>
          </Flex>
{/* Social Icons Web, middle of the Nav */}

{/* Color Mode Switcher(right side, web and mobile) */}
          <Flex 
          _hover={{ 
            textDecoration: 'none',
            cursor: 'pointer',
            bg: useColorModeValue('gray.200', 'gray.700'),
            rounded: 'lg'
          }}
          alignItems={'center'}
          >
            <ColorModeSwitcher />
          </Flex>
        </Flex>
{/* Color Mode Switcher(right side, web and mobile) */}

{/* Hamburguer Menu (left side Mobile) */}
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavRoutesLink key={link}>{link}</NavRoutesLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
{/* Hamburguer Menu (left side Mobile) */}

      <Box p={4}>Main Content Here</Box>
    </>
  );
}
