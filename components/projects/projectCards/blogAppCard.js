import React from 'react';
import Section from '../../section';
import { WorkGridItem } from '../grid-item';
import blogApp from '../../../public/images/blogapp.jpg';

const BlogAppCard = () => {
  return (
    <Section delay={0.3}>
      <WorkGridItem id="blogapp" title="Blog Application" thumbnail={blogApp}>
        A full stack blog mobile application powered by Express.js on the back
        end, Flutter on the front end, Node.js as runtime environment and
        MongoDB as the data store
      </WorkGridItem>
    </Section>
  );
};

export default BlogAppCard;
