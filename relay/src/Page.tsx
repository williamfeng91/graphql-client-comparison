// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { useFragment } from 'react-relay/hooks';

import { Page_viewer$key } from './__generated__/Page_viewer.graphql';
import { Container, Footer, Header } from './app-components';
import Error from './components/Error';
import NewTaskButton from './NewTaskButton';
import TaskList from './TaskList';
import UserDropdown from './UserDropdown';

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
  viewer: Page_viewer$key;
}) {
  const data = useFragment(
    graphql`
      fragment Page_viewer on Viewer {
        users(
          first: 2147483647 # max GraphQLInt
        ) @connection(key: "Page_users") {
          edges {
            node {
              id
            }
          }
        }
        user(id: $userId) {
          ...TaskList_user
        }
        ...UserDropdown_viewer
      }
    `,
    viewer,
  );

  if (!selectedUserId) {
    return <Error>Not found</Error>;
  }

  return (
    <Container>
      <Header>
        <UserDropdown
          onChange={setSelectedUserId}
          selectedUserId={selectedUserId}
          viewer={data}
        />
      </Header>
      {data.user ? (
        <TaskList
          selectedTimeKey={selectedTimeKey}
          selectedUserId={selectedUserId}
          user={data.user}
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
