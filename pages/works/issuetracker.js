import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Title,
  WorkImage,
  Meta,
} from '../../components/projects/projectDetails';
import Layout from '../../components/layouts/article';

const Work = () => (
  <Layout title="Blog App">
    <Container pt={64}>
      <Title>
        Issue Tracker <Badge>2021-</Badge>
      </Title>
      <p>
        A basic full stack application powered by Express.js on the back end,
        React on the front end, Node.js as runtime environment and MongoDB as
        the data store. Using React, Nodejs, Router, GraphQL, ESLint, MongoDB.
      </p>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Demo </Meta>
          <Link href="https://tracker-ui--dang.herokuapp.com/issues">
            https://www.issuetracker.co <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source Code </Meta>
          <Link href="https://github.com/gavindang2911/IssueTracker">
            https://www.github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React/ Nodejs/ Router/ GraphQL/ ESLint/ MongoDB</span>
        </ListItem>
      </List>

      <WorkImage src="/images/IssueTracker/issuetracker.jpg" alt="BlogApp" />
    </Container>
  </Layout>
);

export default Work;
