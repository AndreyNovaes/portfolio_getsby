import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Link,
  Button,
  Center,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

// Nav Components
import ColorModeSwitcher from './NavBarComponents/ColorModeSwitcher';
import NavRoutesLink from './NavBarComponents/NavRoutesLink';
import NavSocialLinks from './NavBarComponents/NavSocialLinks';
// Nav Components
import routes from './assets/NavRoutes';
import { motion } from 'framer-motion';
import Socials from './assets/SocialMedias';
import LeftMiddleAnimation from '../animations/LeftMiddle';
import TopDownAnimation from '../animations/TopDown';

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const HamburguerMenuMotionProps = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  return (
    <>

{/* Dropdown Menu Web(left side of the Nav) */}
      <Box 
        bg={useColorModeValue('gray.100', 'gray.900')}
        px={4} 
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <LeftMiddleAnimation>
            <HStack spacing={8} alignItems={'center'}>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                {routes.map(({name, path}) => (
                  <NavRoutesLink key={name}>{name}</NavRoutesLink>
                ))}
              </HStack>
            </HStack>
          </LeftMiddleAnimation>
{/* Dropdown Menu Web(left side of the Nav) */}

{/* Social Icons Web, middle of the Nav */}
        <TopDownAnimation>
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
        </TopDownAnimation>
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
        <motion.nav
          initial="closed"
          animate="open"
          variants={HamburguerMenuMotionProps}
          transition={{ duration: 0.5 }}
        >
          <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {routes.map(({name, path}) => (
                  <NavRoutesLink key={name}>{name}</NavRoutesLink>
                ))}
                <HStack align={'center'} justify='center' spacing={'24px'} alignContent='center'>
                  <Center>
                    <NavSocialLinks />
                  </Center>
                </HStack>

              </Stack>
          </Box>
        </motion.nav>
        ) : null}
      </Box>
{/* Hamburguer Menu (left side Mobile) */}
    </>
  );
}
