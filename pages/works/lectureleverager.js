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
  <Layout title="Lecture Leverager">
    <Container pt={64}>
      <Title>
        Lecture Leverager <Badge> Hackathon 2021-</Badge>
      </Title>
      <p>
        Lecture Leverager is an easy to use text creator using AI to summarize
        transcribed text into the main points
      </p>
      <span>----</span>
      <p>
        If you’re looking for notes creator, Lecture Leverager’s got your back!
      </p>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Demo </Meta>
          <Link href="https://vigilant-jones-b32c11.netlify.app/">
            https://www.lectureleverager <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source Code </Meta>
          <Link href="https://github.com/Sophisticated-F-Ups">
            https://www.github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS/Android/Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Flutter/ React/ Python/ Fast API/ Adobe</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/LectureLeverager/lectureleverager1.gif"
        alt="LectureLeverager"
      />
      <WorkImage
        src="/images/LectureLeverager/lectureleverager.png"
        alt="LectureLeverager"
      />
      <SimpleGrid columns={[1, 1, 2]} gap={6} delay={0.2}>
        <Section delay={0.3}>
          <WorkImage
            src="/images/LectureLeverager/mobile.png"
            alt="LectureLeverager"
          />
        </Section>
        <Section delay={0.3}>
          <WorkImage
            src="/images/LectureLeverager/mobile2.png"
            alt="LectureLeverager"
          />
        </Section>
        <Section delay={0.3}>
          <WorkImage
            src="/images/LectureLeverager/mobile3.png"
            alt="LectureLeverager"
          />
        </Section>
        <Section delay={0.3}>
          <WorkImage
            src="/images/LectureLeverager/mobile4.png"
            alt="LectureLeverager"
          />
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Work;
