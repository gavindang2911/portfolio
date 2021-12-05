import React from 'react';
import Section from '../../section';
import { WorkGridItem } from '../grid-item';
import lecture from '../../../public/images/LectureLeverager/lectureleverager1.gif';
import FadeInWhenVisible from '../../fadeIn';

const LectureLeverager = () => {
  return (
    <FadeInWhenVisible>
      <Section delay={0.3}>
        <WorkGridItem
          id="lectureleverager"
          title="Lecture Leverager"
          thumbnail={lecture}
        >
          Lecture Leverager is an easy to use text creator using AI to summarize
          transcribed text into the main points
        </WorkGridItem>
      </Section>
    </FadeInWhenVisible>
  );
};

export default LectureLeverager;
