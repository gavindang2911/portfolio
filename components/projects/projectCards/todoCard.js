import React from 'react';
import Section from '../../section';
import { WorkGridItem } from '../grid-item';
import todoApp from '../../../public/images/todo.jpg';

const TodoCard = () => {
  return (
    <Section delay={0.3}>
      <WorkGridItem id="todoapp" title="Todo App" thumbnail={todoApp}>
        CRUD Todo app with React Hooks and Redux for the frontend localStorage
        for data storage
      </WorkGridItem>
    </Section>
  );
};

export default TodoCard;
