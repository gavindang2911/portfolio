import Head from 'next/head';
import Navbar from '../navbar/navbar';
import { Box, Container } from '@chakra-ui/react';

const Main = ({ children, router }) => {
  return (
    <Box as="main">
      <Head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" type="image/png" href="/images/logofavicon.png" />
        <title>Gavin Dang - Homepage</title>
      </Head>

      <Navbar path={router.asPath}/>
      <Container maxW="container.xl">
        {children}
      </Container>
    </Box>
  );
};

export default Main;
