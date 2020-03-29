// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { toGlobalId } from 'graphql-relay';
import React from 'react';
import Modal from 'react-modal';

import useMutation from './useMutation';

Modal.setAppElement('#root');

export const ASSIGN_TASK = graphql`
  mutation NewTaskButtonAssignTaskMutation($input: TaskAssignmentInput!) {
    assignTask(input: $input) {
      taskAssignmentEdge {
        __typename
        cursor
        node {
          id
          name
          frequency
        }
      }
    }
  }
`;

export default function NewTaskButton({
  selectedUserId,
}: {
  selectedUserId: string;
}) {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const closeModal = () => setModalIsOpen(false);

  const [name, setName] = React.useState('');
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const [createTask, { loading }] = useMutation(ASSIGN_TASK);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    createTask({
      variables: {
        input: {
          name: name.trim(),
          frequency: 'DAILY',
          userId: selectedUserId,
        },
      },
      configs: [
        {
          type: 'RANGE_ADD',
          parentID: toGlobalId('User', selectedUserId),
          connectionInfo: [
            {
              key: 'TaskList_assignedTasks',
              rangeBehavior: 'append',
            },
          ],
          edgeName: 'taskAssignmentEdge',
        },
      ],
    });
    setModalIsOpen(false);
  };
  const validate = () => {
    if (!name) return false;
    return true;
  };

  return (
    <React.Fragment>
      <button type="button" onClick={() => setModalIsOpen(true)}>
        New Task
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <form onSubmit={handleSubmit}>
          <input onChange={handleNameChange} value={name} />
          <button type="submit" disabled={loading || !validate()}>
            {loading ? 'Creating...' : 'Create'}
          </button>
        </form>
      </Modal>
    </React.Fragment>
  );
}
