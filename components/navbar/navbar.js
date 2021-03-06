import Logo from '../logo';
import NextLink from 'next/link';
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from '../theme-toggle-button';
import { IoLogoGithub } from 'react-icons/io5';

const LinkItem = ({ href, path, _target, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
  const colorChange = useColorModeValue('#104c91', 'greenyellow');
  return (
    <NextLink href={href}>
      <Link p={2} color={active ? colorChange : inactiveColor}>
        <div style={{ fontWeight: 'bold', letterSpacing: '1px' }}>
          {children}
        </div>
      </Link>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={5}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        {' '}
        <Flex align="center" mr={5}>
          <Heading as="h1" size="50px" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          display={{ base: 'none', md: 'flex' }}
          direction={{ base: 'column', md: 'row' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <MenuItem as={Link} href="https://github.com/gavindang2911">
                  <IoLogoGithub />
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
