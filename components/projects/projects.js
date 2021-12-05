import { Button } from '@chakra-ui/button';
import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/layout';
import React from 'react';
import Section from '../section';
import NextLink from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { WorkGridItem } from './grid-item';
import thumbInkdrop from '../../public/images/todo.jpg';
import todoApp from '../../public/images/todo.jpg';
import blogApp from '../../public/images/blogapp.jpg';
import BlogAppCard from './projectCards/blogAppCard';
import TodoCard from './projectCards/todoCard';

const Projects = () => {
  return (
    <Container maxW="1000">
      <Section>
        <div className="projectDetail">
          <Heading size="2xl" variant="section-title">
            Projects
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6} delay={0.2}>
            <BlogAppCard />
            <TodoCard />
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
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </div>
      </Section>
    </Container>
  );
};

export default Projects;
