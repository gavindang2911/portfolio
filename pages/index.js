import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Paragraph,
  NextLink,
  Link,
  Button,
} from '@chakra-ui/react';
import Section from '../components/section';

const Page = () => {
  return (
    // <Container >
    <Container maxW={1000} pt={60}>
      {/* <Box
        borderRadius="lg"
        mb={10}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-stack developer!
      </Box> */}

      <Box display={{ md: 'flex' }}>
        <Box align="center" >
          <Heading variant="page-title" size='3xl'>
            Gavin Dang
          </Heading>
          <h3>Believer (Artist / Developer / Designer)</h3>
        </Box>
        <Box
          flexShrink={2}
          mt={{ base: 4, md: 0 }}
          ml={4}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="300px"
            display="inline-block"
            borderRadius="full"
            src="/images/profile-image.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.2} pt={60}>
        <Heading variant="section-title">
          Work
        </Heading>
        <p>
          I am a full-stack developer based in Vancouver with a passion for
          building digital services/stuff. He has a knack for all things
          launching products, from planning and designing all the way to solving
          real-life problems with code. When not online, he loves hanging out
          with his camera. Currently, he is living off of his own product called{' '}
          {/* <NextLink href="/works/inkdrop">
            <Link>Inkdrop</Link>
          </NextLink>
          . */}
        </p>
      </Section>
    </Container>
  );
};

export default Page;
