import { Container, Box, Heading } from '@chakra-ui/react';
import NextLink from 'next/link';
import Layout from '../components/layouts/article';

import Section from '../components/section';
import About from '../components/about/about';
import Projects from '../components/projects/projects';
import Avatar from '../components/avatar/avatar';
import NameTitle from '../components/nameTitle/nameTitle';

const Page = () => {
  return (
    // <Container >
    <Layout>
      <Container maxW="1000">
        {/* <Box
        borderRadius="lg"
        mb={10}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-stack developer!
      </Box> */}
        <NameTitle />
        <About />
        <Projects />
      </Container>
    </Layout>
  );
};

export default Page;
