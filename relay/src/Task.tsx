// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { fromGlobalId, toGlobalId } from 'graphql-relay';
import React from 'react';
import { useFragment } from 'react-relay/hooks';
import { ConnectionHandler, RecordSourceSelectorProxy } from 'relay-runtime';

import { Task_taskAssignment$key } from './__generated__/Task_taskAssignment.graphql';
import { Label, Row } from './app-components';
import useMutation from './useMutation';

export const CREATE_COMPLETED_TASK = graphql`
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

export const DESTROY_COMPLETED_TASK = graphql`
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
  taskAssignment: Task_taskAssignment$key;
}) {
  const data = useFragment(
    graphql`
      fragment Task_taskAssignment on TaskAssignment {
        id
        name
      }
    `,
    taskAssignment,
  );

  const variables = {
    input: {
      taskAssignmentId: fromGlobalId(data.id).id,
      timeKey: selectedTimeKey,
    },
  };
  const [create] = useMutation(CREATE_COMPLETED_TASK);
  const [destroy] = useMutation(DESTROY_COMPLETED_TASK);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (done) {
      destroy({
        variables,
        configs: [
          {
            type: 'RANGE_DELETE',
            parentID: data.id,
            connectionKeys: [
              {
                key: 'TaskList_completedTasks',
              },
            ],
            pathToConnection: ['node', 'completedTasks'],
            deletedIDFieldName: 'destroyedCompletedTaskIds',
          },
        ],
      });
    } else {
      create({
        variables,
        configs: [
          {
            type: 'RANGE_ADD',
            parentID: data.id,
            connectionInfo: [
              {
                key: 'TaskList_completedTasks',
                rangeBehavior: 'append',
              },
            ],
            edgeName: 'completedTaskEdge',
          },
        ],
      });
    }
  };

  return (
    <Row>
      <input type="checkbox" checked={done} onChange={handleChange} />
      <Label>
        <span>{data.name}</span>
      </Label>
      <span>Edit</span>
    </Row>
  );
}
