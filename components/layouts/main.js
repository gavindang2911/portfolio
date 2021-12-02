import Head from 'next/head';
import Navbar from '../navbar/navbar';
import { Box, Container } from '@chakra-ui/react';

const Main = ({ children, router }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Gavin Dang - Homepage</title>
      </Head>

      <Navbar path={router.asPath}/>
      <Container maxW="container.md">
        {children}
      </Container>
    </Box>
  );
};

export default Main;
