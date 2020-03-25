import { ApolloError } from 'apollo-client';
import gql from 'graphql-tag';
import React from 'react';

import { TaskAssignments } from './__generated__/TaskAssignments';
import { TaskListContainer } from './app-components';
import Error from './components/Error';
import Loading from './components/Loading';
import Task, { TASK_ASSIGNMENT_FRAGMENT } from './Task';

export const TASK_ASSIGNMENTS_FRAGMENT = gql`
  fragment TaskAssignments on TaskAssignment {
    id
    completedTasks {
      id
      timeKey
    }
    ...TaskAssignment
  }
  ${TASK_ASSIGNMENT_FRAGMENT}
`;

export default function TaskList({
  error,
  loading,
  selectedTimeKey,
  selectedUserId,
  taskAssignments,
}: {
  error?: ApolloError;
  loading: boolean;
  selectedTimeKey: string;
  selectedUserId: string;
  taskAssignments?: TaskAssignments[];
}) {
  if (loading) return <Loading />;
  if (error) return <Error>{error}</Error>;
  if (!taskAssignments) return <Error>Not found</Error>;

  const renderTaskAssignment = (taskAssignment: TaskAssignments) => {
    const done = taskAssignment.completedTasks.some(
      (completedTask) => completedTask.timeKey === selectedTimeKey,
    );
    return (
      <Task
        key={taskAssignment.id}
        done={done}
        selectedTimeKey={selectedTimeKey}
        selectedUserId={selectedUserId}
        taskAssignment={taskAssignment}
      />
    );
  };

  return (
    <TaskListContainer>
      {taskAssignments.map(renderTaskAssignment)}
    </TaskListContainer>
  );
}
