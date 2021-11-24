import { Container, Box, Heading } from '@chakra-ui/react';

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" mb={6} p={3} textAlign="center" bg="red">
        Hello, I&apos;m a full-stack developer!
      </Box>

      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
          Gavin Dang
        </Heading>
        <p>Digital Craftsman ( Artist / Developer / Designer )</p>
      </Box>
    </Container>
  );
};

export default Page;
