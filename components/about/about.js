import { Button } from '@chakra-ui/button';
import { Box, Heading } from '@chakra-ui/layout';
import React from 'react';
import Section from '../section';
import NextLink from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';
import FadeInWhenVisible from '../fadeIn';

const About = () => {
  return (
    <FadeInWhenVisible>
      <Section delay={0.2}>
        <Heading size="2xl" variant="section-title" pl={70}>
          About
        </Heading>
        <p className="aboutDetail">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.{' '}
        </p>
      </Section>
    </FadeInWhenVisible>
  );
};

export default About;
