import gql from 'graphql-tag';
import React from 'react';

import {
  appQuery_viewer_user,
  appQuery_viewer_user_assignedTasks_edges,
} from './__generated__/appQuery';
import { TaskListContainer } from './app-components';
import Task, { TASK_ASSIGNMENT_FRAGMENT } from './Task';

export const TASK_ASSIGNMENTS_FRAGMENT = gql`
  fragment TaskList_user on User {
    assignedTasks(
      first: 2147483647 # max GraphQLInt
    ) {
      edges {
        node {
          id
          completedTasks(
            first: 2147483647 # max GraphQLInt
          ) {
            edges {
              node {
                id
                timeKey
              }
            }
          }
          ...Task_taskAssignment
        }
      }
    }
  }
  ${TASK_ASSIGNMENT_FRAGMENT}
`;

export default function TaskList({
  selectedTimeKey,
  selectedUserId,
  user,
}: {
  selectedTimeKey: string;
  selectedUserId: string;
  user: appQuery_viewer_user;
}) {
  const renderTaskAssignment = (
    taskAssignment: appQuery_viewer_user_assignedTasks_edges,
  ) => {
    const done = taskAssignment.node.completedTasks.edges.some(
      (completedTask) => completedTask.node.timeKey === selectedTimeKey,
    );
    return (
      <Task
        key={taskAssignment.node.id}
        done={done}
        selectedTimeKey={selectedTimeKey}
        selectedUserId={selectedUserId}
        taskAssignment={taskAssignment.node}
      />
    );
  };

  return (
    <TaskListContainer>
      {user.assignedTasks.edges.map(renderTaskAssignment)}
    </TaskListContainer>
  );
}
