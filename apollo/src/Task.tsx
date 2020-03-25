import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import immer from 'immer';
import React from 'react';

import { GetUser } from './__generated__/GetUser';
import { TaskAssignment } from './__generated__/TaskAssignment';
import { GET_USER } from './app';
import { Label, Row } from './app-components';

export const TASK_ASSIGNMENT_FRAGMENT = gql`
  fragment TaskAssignment on TaskAssignment {
    id
    name
  }
`;

export const CREATE_COMPLETED_TASK = gql`
  mutation CreateCompletedTask($input: CompletedTaskInput!) {
    createCompletedTask(input: $input) {
      id
    }
  }
`;

export const DESTROY_COMPLETED_TASK = gql`
  mutation DestroyCompletedTask($input: CompletedTaskInput!) {
    destroyCompletedTask(input: $input)
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
      taskAssignmentId: taskAssignment.id,
      timeKey: selectedTimeKey,
    },
  };
  const [create] = useMutation(CREATE_COMPLETED_TASK, {
    variables,
    refetchQueries: [
      {
        query: GET_USER,
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
      { data: { destroyCompletedTask: destroyedCompletedTaskIds } },
    ) => {
      const data = cache.readQuery<GetUser>({
        query: GET_USER,
        variables: {
          userId: selectedUserId,
        },
      });
      if (data && data.user && data.user.assignedTasks) {
        const task = data.user.assignedTasks.find(
          ({ id }) => id === taskAssignment.id,
        );
        if (task) {
          const newData = immer(data, (draftData) => {
            if (draftData.user) {
              const draftTask = draftData.user.assignedTasks.find(
                ({ id }) => id === taskAssignment.id,
              );
              if (draftTask) {
                draftTask.completedTasks = draftTask.completedTasks.filter(
                  (completedTask) =>
                    !destroyedCompletedTaskIds.includes(completedTask.id),
                );
              }
            }
          });
          cache.writeQuery({
            query: GET_USER,
            variables: {
              userId: selectedUserId,
            },
            data: newData,
          });
        }
      }
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
