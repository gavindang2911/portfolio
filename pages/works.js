import { Container, Heading, SimpleGrid } from '@chakra-ui/react';

import Layout from '../components/layouts/article';
import BlogAppCard from '../components/projects/projectCards/blogAppCard';
import TodoCard from '../components/projects/projectCards/todoCard';
import IssueTracker from '../components/projects/projectCards/issueTrackerCard';
import LectureLeverager from '../components/projects/projectCards/lectureLeveragerCard';

const Works = () => (
  <Layout title="Works">
    <Container pt={40}>
      <Heading as="h3" fontSize={20}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <BlogAppCard />
        <TodoCard />
        <IssueTracker />
        <LectureLeverager />
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Works;
