import { Container, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react';

const Page = () => {
  return (
    // <Container >
    <Container maxW={1000}>
      <Box borderRadius="lg" mb={6} p={3} textAlign="center" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}>
        Hello, I&apos;m a full-stack developer!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Gavin Dang
          </Heading>
          <p>Digital Craftsman ( Artist / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="250px"
            display="inline-block"
            borderRadius="full"
            src="/images/profile-image.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
