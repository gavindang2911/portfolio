import React from 'react';
import Section from '../../section';
import { WorkGridItem } from '../grid-item';
import issueTracker from '../../../public/images/IssueTracker/issuetracker.jpg';
import FadeInWhenVisible from '../../fadeIn';

const IssueTracker = () => {
  return (
    <FadeInWhenVisible>
      <Section>
        <WorkGridItem
          id="issuetracker"
          title="Issue Tracker"
          thumbnail={issueTracker}
        >
          A basic full stack Issue Tracker application powered by Express.js
          on the back end, React on the front end, Node.js as runtime
          environment and MongoDB as the data store.
        </WorkGridItem>
      </Section>
    </FadeInWhenVisible>
  );
};

export default IssueTracker;
