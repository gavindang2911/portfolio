import React from 'react';
import Section from '../../section';
import { WorkGridItem } from '../grid-item';
import issueTracker from '../../../public/images/IssueTracker/issuetracker.jpg';

const IssueTracker = () => {
  return (
    <Section>
          <WorkGridItem
            id="issuetracker"
            title="Issue Tracker"
            thumbnail={issueTracker}
          >
            A basic full stack "issue tracker" application powered by Express.js
            on the back end, React on the front end, Node.js as runtime
            environment and MongoDB as the data store.
          </WorkGridItem>
        </Section>
  );
};

export default IssueTracker;
