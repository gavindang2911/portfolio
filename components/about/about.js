import { Heading } from '@chakra-ui/layout';
import React from 'react';
import Section from '../section';

import FadeInWhenVisible from '../fadeIn';
import SmallTitleText from '../nameTitle/smallTitleText';

const About = () => {
  return (
    <FadeInWhenVisible>
      <Section delay={0.2}>
        <Heading size="2xl" variant="section-title" pl={70}>
          <SmallTitleText text="About" />
        </Heading>
        <p className="aboutDetail">
          My name is Gavin Dang and I am a Software Developer, currently living
          in Vancouver, BC, Canada.
          <p>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
          <br />
          I am pursuing a Bachelor&apos;s degree in Computing Science at Simon Fraser
          University. My primary focus and inspiration for my studies are Web
          and Mobile Development.
          <br />
          <p>
            I am both driven and self-motivated, and I am constantly
            experimenting with new technologies and techniques. I am very
            committed towards my projects, and strive to better myself as a
            developer. I enjoy being challenged and engaging with projects that
            require me to work outside my comfort and knowledge set.
          </p>
          <br />
          <p>
            I am experienced in both front and back-end development, and I am
            proficient in React, NodeJs, SQL/PostgreSQL, MongoDB, Flutter to
            name a few. I am also familiar with Java, C/C++, Python ..
          </p>
          <br />
          <p>
            And I believe that we are always eager to teach and help others to
            develop something special. We are the ones who can help the
            computers to take right decisions by creating incredible software{' '}
          </p>
        </p>
      </Section>
    </FadeInWhenVisible>
  );
};

export default About;
