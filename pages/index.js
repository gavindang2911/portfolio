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
import { ChevronRightIcon } from '@chakra-ui/icons';
import Section from '../components/section';
import FadeInWhenVisible from '../components/fadeIn';


function Carrd() {
  return (
    <div
      style={{
        padding: 40,
        background: "white",
        display: "inline-block",
        borderRadius: 5
      }}
    />
  );
}

const Page = () => {
  return (
    // <Container >
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
      <Section delay={0.2}>

      <Box
        display={{ md: 'flex' }}
        justifyContent="space-evenly"
        h="100vh"
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

      <Section delay={0.2}>

          <Heading size="2xl" variant="section-title" pl={70}>
            Work
          </Heading>
          <p
            style={{
              paddingLeft: '70px',
              paddingRight: '50px',
              paddingTop: '50px',
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.{' '}
          </p>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>

      </Section>
      </FadeInWhenVisible>

    </Container>
  );
};

export default Page;
