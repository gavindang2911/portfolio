import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/section';
import { WorkGridItem } from '../components/projects/grid-item';
import issueTracker from '../public/images/IssueTracker/issuetracker.jpg';

import Layout from '../components/layouts/article';
import BlogAppCard from '../components/projects/projectCards/blogAppCard';
import TodoCard from '../components/projects/projectCards/todoCard';

const Works = () => (
  <Layout title="Works">
    <Container pt={64}>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <BlogAppCard />
        <TodoCard />
        <Section>
          <WorkGridItem
            id="issuetracker"
            title="Issue Tracker"
            thumbnail={issueTracker}
          >
            A basic full stack "issue tracker" application powered by Express.js
            on the back end, React on the front end, Node.js as runtime
            environment and MongoDB as the data store.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Works;
