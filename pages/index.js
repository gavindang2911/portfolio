import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Layout from '../components/layouts/article';

import Section from '../components/section';
import FadeInWhenVisible from '../components/fadeIn';
import About from '../components/about/about';
import Projects from '../components/projects/projects';


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
        <Section delay={0.2} >
          <Box
            display={{ md: 'flex' }}
            justifyContent="space-evenly"
            h="80vh"
            pt={40}
          >
            <Box align="center" mt={{ base: 5, md: 36 }}>
              <Heading variant="page-title" size="4xl">
                Gavin Dang
              </Heading>
              <h3>Believer / Developer / Designer</h3>
            </Box>
            <Box flexShrink={4} mt={{ base: 5, md: 12 }} align="center">
              <Image
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                maxWidth="350px"
                display="inline-block"
                borderRadius="full"
                src="/images/profile-image.jpg"
                alt="Profile image"
              />
            </Box>
          </Box>
        </Section>

        <FadeInWhenVisible>
          <About />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <Projects />
        </FadeInWhenVisible>
      </Container>
    </Layout>
  );
};

export default Page;
