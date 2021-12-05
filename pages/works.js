import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/section';
import { WorkGridItem } from '../components/projects/grid-item';
import thumbInkdrop from '../public/images/logo2.jpg';
import todoApp from '../public/images/todo.jpg';
import Layout from '../components/layouts/article';

const Works = () => (
  <Layout title="Works">
    <Container pt={64}>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="todoapp"
            title="Todo App"
            thumbnail={todoApp}
          >
            CRUD Todo App allows user create doto
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="list issues"
            title="Issues Tracker"
            thumbnail={thumbInkdrop}
          >
            Keep track of issues
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="todoapp"
            title="Todo App"
            thumbnail={todoApp}
          >
            CRUD Todo App allows user create doto
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="todoapp"
            title="Todo App"
            thumbnail={todoApp}
          >
            CRUD Todo App allows user create doto
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Works;
