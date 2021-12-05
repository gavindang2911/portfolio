import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Title,
  WorkImage,
  Meta,
} from '../../components/projects/projectDetails';
import Layout from '../../components/layouts/article';

const Work = () => (
  <Layout title="Todo App">
    <Container pt={64} >
      <Title>
        Todo App <Badge>2021-</Badge>
      </Title>
      <p>
        CRUD Todo app with React Hooks and Redux for the frontend localStorage
        for data storage
      </p>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>DEMO</Meta>
          <Link href="https://adoring-pasteur-d6bc75.netlify.app/">
            https://www.todo.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Redux, React Hooks, Bootsrap, Local Storage</span>
        </ListItem>
      </List>

      <WorkImage src="/images/todoapp.png" alt="Todo" />
    </Container>
  </Layout>
);

export default Work;
