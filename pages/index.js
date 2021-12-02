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
        <Box align="center">
          <Heading variant="page-title" size="3xl">
            Gavin Dang
          </Heading>
          <h3>Believer (Artist / Developer / Designer)</h3>
        </Box>
        <Box flexShrink={2} mt={{ base: 4, md: 0 }} ml={4} align="center">
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
        <Heading variant="section-title">Work</Heading>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.{' '}
          {/* <NextLink href="/works/inkdrop">
            <Link>Inkdrop</Link>
          </NextLink>
          . */}
        </p>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  );
};

export default Page;
