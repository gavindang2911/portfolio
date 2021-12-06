import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Title,
  WorkImage,
  Meta,
} from '../../components/projects/projectDetails';
import Layout from '../../components/layouts/article';
import Section from '../../components/section';

const Work = () => (
  <Layout title="Blog App">
    <Container pt={64}>
      <Title>
        Blog App <Badge>2021-</Badge>
      </Title>
      <p>
        A full stack blog mobile application powered by Express.js on the back
        end, Flutter on the front end, Node.js as runtime environment and
        MongoDB as the data store
      </p>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source Code </Meta>
          <Link href="https://github.com/gavindang2911/Blog-App">
            https://www.github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Flutter/ Node JS/ Express JS/ MongoDB</span>
        </ListItem>
      </List>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkImage src="/images/BlogApp/blogapp1.jpg" alt="BlogApp" />
        </Section>
        <Section>
          <WorkImage src="/images/BlogApp/blogapp2.jpg" alt="BlogApp" />
        </Section>
        <Section>
          <WorkImage src="/images/BlogApp/blogapp3.jpg" alt="BlogApp" />
        </Section>
        <Section>
          <WorkImage src="/images/BlogApp/blogapp4.jpg" alt="BlogApp" />
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Work;
