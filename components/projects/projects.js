import { Button } from '@chakra-ui/button';
import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/layout';
import React from 'react';
import Section from '../section';
import NextLink from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { WorkGridItem } from './grid-item';
import thumbInkdrop from '../../public/images/todo.jpg';
import BlogAppCard from './projectCards/blogAppCard';
import TodoCard from './projectCards/todoCard';
import IssueTracker from './projectCards/issueTrackerCard';
import FadeInWhenVisible from '../fadeIn';

const Projects = () => {
  return (
    <Container maxW="1000">
      <Section>
        <div className="projectDetail">
          <FadeInWhenVisible>
            <Heading size="2xl" variant="section-title">
              Projects
            </Heading>
          </FadeInWhenVisible>
          <SimpleGrid columns={[1, 1, 2]} gap={6} delay={0.2}>
            <FadeInWhenVisible>
              <BlogAppCard />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <TodoCard />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <IssueTracker />
            </FadeInWhenVisible>
          </SimpleGrid>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                View full projects
              </Button>
            </NextLink>
          </Box>
        </div>
      </Section>
    </Container>
  );
};

export default Projects;
