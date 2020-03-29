import { useMutation } from '@apollo/react-hooks';
import { fromGlobalId } from 'graphql-relay';
import gql from 'graphql-tag';
import immer from 'immer';
import React from 'react';

import { appQuery } from './__generated__/appQuery';
import { TaskAssignment } from './__generated__/TaskAssignment';
import { APP_QUERY } from './app';
import { Label, Row } from './app-components';

export const TASK_ASSIGNMENT_FRAGMENT = gql`
  fragment Task_taskAssignment on TaskAssignment {
    id
    name
  }
`;

export const CREATE_COMPLETED_TASK = gql`
  mutation TaskCreateCompletedTaskMutation($input: CompletedTaskInput!) {
    createCompletedTask(input: $input) {
      completedTaskEdge {
        __typename
        cursor
        node {
          id
          timeKey
        }
      }
    }
  }
`;

export const DESTROY_COMPLETED_TASK = gql`
  mutation TaskDestroyCompletedTaskMutation($input: CompletedTaskInput!) {
    destroyCompletedTask(input: $input) {
      destroyedCompletedTaskIds
    }
  }
`;

export default function Task({
  done,
  selectedTimeKey,
  selectedUserId,
  taskAssignment,
}: {
  done: boolean;
  selectedTimeKey: string;
  selectedUserId: string;
  taskAssignment: TaskAssignment;
}) {
  const variables = {
    input: {
      taskAssignmentId: fromGlobalId(taskAssignment.id).id,
      timeKey: selectedTimeKey,
    },
  };
  const [create] = useMutation(CREATE_COMPLETED_TASK, {
    variables,
    refetchQueries: [
      {
        query: APP_QUERY,
        variables: {
          userId: selectedUserId,
        },
      },
    ],
  });
  const [destroy] = useMutation(DESTROY_COMPLETED_TASK, {
    variables,
    update: (
      cache,
      {
        data: {
          destroyCompletedTask: { destroyedCompletedTaskIds },
        },
      },
    ) => {
      const data = cache.readQuery<appQuery>({
        query: APP_QUERY,
        variables: {
          userId: selectedUserId,
        },
      });
      const taskEdge = data?.viewer.user?.assignedTasks.edges.find(
        ({ node }) => node.id === taskAssignment.id,
      );
      if (!taskEdge) {
        return;
      }
      const newData = immer(data, (draftData) => {
        const draftTaskEdge = draftData?.viewer.user?.assignedTasks.edges.find(
          ({ node }) => node.id === taskAssignment.id,
        );
        if (!draftTaskEdge) return;
        draftTaskEdge.node.completedTasks.edges = draftTaskEdge.node.completedTasks.edges.filter(
          (completedTask) =>
            !destroyedCompletedTaskIds.includes(completedTask.node.id),
        );
      });
      cache.writeQuery({
        query: APP_QUERY,
        variables: {
          userId: selectedUserId,
        },
        data: newData,
      });
    },
  });
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (done) {
      await destroy();
    } else {
      await create();
    }
  };

  return (
    <Row>
      <input type="checkbox" checked={done} onChange={handleChange} />
      <Label>
        <span>{taskAssignment.name}</span>
      </Label>
      <span>Edit</span>
    </Row>
  );
}
