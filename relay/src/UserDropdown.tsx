// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { useFragment } from 'react-relay/hooks';

import { UserDropdown_viewer$key } from './__generated__/UserDropdown_viewer.graphql';
import { fromGlobalId } from 'graphql-relay';

export default function UserDropDown({
  onChange,
  selectedUserId,
  viewer,
}: {
  onChange: (selectedUserId: string) => void;
  selectedUserId: string;
  viewer: UserDropdown_viewer$key;
}) {
  const data = useFragment(
    graphql`
      fragment UserDropdown_viewer on Viewer {
        users(
          first: 2147483647 # max GraphQLInt
        ) @connection(key: "UsersDropdown_users") {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `,
    viewer,
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.currentTarget.value);
  };
  return (
    <select onChange={handleChange} value={selectedUserId}>
      {data.users.edges.map((user) => (
        <option key={user.node.id} value={fromGlobalId(user.node.id).id}>
          {user.node.name}
        </option>
      ))}
    </select>
  );
}
