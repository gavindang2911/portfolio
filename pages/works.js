import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/section';
import { WorkGridItem } from '../components/projects/grid-item';

import Layout from '../components/layouts/article';
import BlogAppCard from '../components/projects/projectCards/blogAppCard';
import TodoCard from '../components/projects/projectCards/todoCard';
import IssueTracker from '../components/projects/projectCards/issueTrackerCard';

const Works = () => (
  <Layout title="Works">
    <Container pt={64}>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <BlogAppCard />
        <TodoCard />
        <IssueTracker />
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Works;
