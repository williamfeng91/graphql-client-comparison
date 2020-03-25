import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import moment from 'moment';
import React from 'react';

import { GetUser } from './__generated__/GetUser';
import { GetUsers } from './__generated__/GetUsers';
import { Container, Footer, Header } from './app-components';
import Error from './components/Error';
import Loading from './components/Loading';
import NewTaskButton from './NewTaskButton';
import TaskList, { TASK_ASSIGNMENTS_FRAGMENT } from './TaskList';
import UserDropDown, { USER_PROFILE_FRAGMENT } from './UserDropdown';

export const GET_USERS = gql`
  query GetUsers {
    users {
      ...UserProfile
    }
  }
  ${USER_PROFILE_FRAGMENT}
`;

export const GET_USER = gql`
  query GetUser($userId: ID!) {
    user(id: $userId) {
      assignedTasks {
        ...TaskAssignments
      }
    }
  }
  ${TASK_ASSIGNMENTS_FRAGMENT}
`;

export default function App() {
  const {
    data: getUsersData,
    loading: loadingUsers,
    error: usersError,
  } = useQuery<GetUsers>(GET_USERS);

  const [selectedTimeKey, setSelectedTimeKey] = React.useState(
    moment().format('YYYY-MM-DD'),
  );

  const [selectedUserId, setSelectedUserId] = React.useState<string | null>(
    null,
  );
  React.useEffect(() => {
    if (getUsersData && getUsersData.users.length > 0) {
      setSelectedUserId((prevSelectedUserId) => {
        if (prevSelectedUserId) return prevSelectedUserId;
        return getUsersData.users[0].id;
      });
    }
  }, [getUsersData]);

  const {
    data: getUserData,
    loading: loadingSelectedUser,
    error: selectedUserError,
  } = useQuery<GetUser>(GET_USER, {
    skip: !selectedUserId,
    variables: {
      userId: selectedUserId,
    },
  });

  if (!selectedUserId) return <Loading />;
  if (usersError) return <Error>{usersError}</Error>;
  if (!getUsersData) return <Error>Not found</Error>;

  return (
    <Container>
      <Header>
        <UserDropDown
          onChange={setSelectedUserId}
          selectedUserId={selectedUserId}
          users={getUsersData.users}
        />
      </Header>
      <TaskList
        error={selectedUserError}
        loading={loadingSelectedUser}
        selectedTimeKey={selectedTimeKey}
        selectedUserId={selectedUserId}
        taskAssignments={getUserData?.user?.assignedTasks}
      />
      <Footer>
        <NewTaskButton selectedUserId={selectedUserId} />
      </Footer>
    </Container>
  );
}
