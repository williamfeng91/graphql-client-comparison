import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import Modal from 'react-modal';

import { GET_USER } from './app';
import { ErrorText } from './app-components';

Modal.setAppElement('#root');

export const ASSIGN_TASK = gql`
  mutation assignTask($input: TaskAssignmentInput!) {
    assignTask(input: $input) {
      id
      name
      frequency
      completedTasks {
        id
        timeKey
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

  const [createTask, { loading, error }] = useMutation(ASSIGN_TASK, {
    refetchQueries: [
      {
        query: GET_USER,
        variables: {
          userId: selectedUserId,
        },
      },
    ],
  });
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const result = await createTask({
      variables: {
        input: {
          name: name.trim(),
          frequency: 'DAILY',
          userId: selectedUserId,
        },
      },
    });
    if (!result.errors) {
      setModalIsOpen(false);
    }
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
          {error && <ErrorText>{error.message}</ErrorText>}
        </form>
      </Modal>
    </React.Fragment>
  );
}
