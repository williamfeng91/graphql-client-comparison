import gql from 'graphql-tag';
import React from 'react';

import { appQuery_viewer } from './__generated__/appQuery';
import { Container, Footer, Header } from './app-components';
import Error from './components/Error';
import NewTaskButton from './NewTaskButton';
import TaskList, { TASK_ASSIGNMENTS_FRAGMENT } from './TaskList';
import UserDropDown, { USER_PROFILE_FRAGMENT } from './UserDropdown';

export const VIEWER_FRAGMENT = gql`
  fragment Page_viewer on Viewer {
    user(id: $userId) {
      ...TaskList_user
    }
    ...UserDropdown_viewer
  }
  ${USER_PROFILE_FRAGMENT}
  ${TASK_ASSIGNMENTS_FRAGMENT}
`;

export default function Page({
  selectedTimeKey,
  selectedUserId,
  setSelectedTimeKey,
  setSelectedUserId,
  viewer,
}: {
  selectedTimeKey: string;
  selectedUserId: string;
  setSelectedTimeKey: React.Dispatch<React.SetStateAction<string>>;
  setSelectedUserId: React.Dispatch<React.SetStateAction<string>>;
  viewer: appQuery_viewer;
}) {
  if (!selectedUserId) {
    return <Error>Not found</Error>;
  }

  return (
    <Container>
      <Header>
        <UserDropDown
          onChange={setSelectedUserId}
          selectedUserId={selectedUserId}
          viewer={viewer}
        />
      </Header>
      {viewer.user ? (
        <TaskList
          selectedTimeKey={selectedTimeKey}
          selectedUserId={selectedUserId}
          user={viewer.user}
        />
      ) : (
        <Error>User not found</Error>
      )}
      <Footer>
        <NewTaskButton selectedUserId={selectedUserId} />
      </Footer>
    </Container>
  );
}
