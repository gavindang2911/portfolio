import { Container } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import About from '../components/about/about';
import Projects from '../components/projects/projects';
import NameTitle from '../components/nameTitle/nameTitle';
import SocialMedia from '../components/socialMedia/socialMedia';

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
        <SocialMedia />
      </Container>
    </Layout>
  );
};

export default Page;
