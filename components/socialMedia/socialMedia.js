import React from 'react';
import Section from '../section';
import NextLink from 'next/link';
import {
  Link,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Container,
  Icon,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

// import Section from '../components/section'
import GridItem from '../projects/grid-item';
import {
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord,
} from 'react-icons/io5';
import SocialMediaLink from './socialMediaLink';
import FadeInWhenVisible from '../fadeIn';
import SmallTitleText from '../nameTitle/smallTitleText';

const SocialMedia = () => {
  return (
    <Container maxW="1000" pl={70}>
      <FadeInWhenVisible>
        <Section delay={0.3}>
          <Heading variant="section-title">
            <SmallTitleText text="I ♥" />
          </Heading>
          <p>Art, Music, Soccer, Photography , Software, Technology</p>
        </Section>
      </FadeInWhenVisible>

      <Section delay={0.3}>
        <FadeInWhenVisible>
          <Heading variant="section-title">
            <SmallTitleText text="Contact" />
          </Heading>
        </FadeInWhenVisible>
        <List>
          <SocialMediaLink
            href="https://github.com/gavindang2911"
            icon={IoLogoGithub}
            title="@Github"
          />
          <SocialMediaLink
            href="https://www.linkedin.com/in/hoai-dang-66080819b/"
            icon={IoLogoLinkedin}
            title="@Linkedin"
          />
          <SocialMediaLink
            href="https://www.instagram.com/tr_hoai2911/"
            icon={IoLogoInstagram}
            title="@Instagram"
          />
        </List>
      </Section>
    </Container>
  );
};

export default SocialMedia;
