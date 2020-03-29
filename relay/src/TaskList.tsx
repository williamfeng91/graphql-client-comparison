// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { useFragment } from 'react-relay/hooks';

import { TaskList_user$key } from './__generated__/TaskList_user.graphql';
import { TaskListContainer } from './app-components';
import Task from './Task';

export default function TaskList({
  selectedTimeKey,
  selectedUserId,
  user,
}: {
  selectedTimeKey: string;
  selectedUserId: string;
  user: TaskList_user$key;
}) {
  const data = useFragment(
    graphql`
      fragment TaskList_user on User {
        assignedTasks(
          first: 2147483647 # max GraphQLInt
        ) @connection(key: "TaskList_assignedTasks") {
          edges {
            node {
              id
              completedTasks(
                first: 2147483647 # max GraphQLInt
              ) @connection(key: "TaskList_completedTasks") {
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
    `,
    user,
  );

  const renderTaskAssignment = (
    taskAssignment: typeof data['assignedTasks']['edges'][number],
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
      {data.assignedTasks.edges.map(renderTaskAssignment)}
    </TaskListContainer>
  );
}
