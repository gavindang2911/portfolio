import React from 'react';
import Section from '../../section';
import { WorkGridItem } from '../grid-item';
import blogApp from '../../../public/images/blogapp.jpg';
import FadeInWhenVisible from '../../fadeIn';

const BlogAppCard = () => {
  return (
    <FadeInWhenVisible>
      <Section delay={0.3}>
        <WorkGridItem id="blogapp" title="Blog Application" thumbnail={blogApp}>
          A full stack blog mobile application powered by Express.js on the back
          end, Flutter on the front end, Node.js as runtime environment and
          MongoDB as the data store
        </WorkGridItem>
      </Section>
    </FadeInWhenVisible>
  );
};

export default BlogAppCard;
