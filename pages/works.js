import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/section';
import { WorkGridItem } from '../components/projectBox/grid-item';
import thumbInkdrop from '../public/images/logo2.jpg';

const Works = () => (
  <Container pt={64}>
    <Heading as="h3" fontSize={20} mb={4}>
      Works
    </Heading>
    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.3}>
        <WorkGridItem id="todo list" title="Todo App" thumbnail={thumbInkdrop}>
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
    </SimpleGrid>
  </Container>
);

export default Works;
