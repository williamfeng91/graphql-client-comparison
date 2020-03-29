import gql from 'graphql-tag';
import React from 'react';

import { appQuery_viewer } from './__generated__/appQuery';
import { fromGlobalId } from 'graphql-relay';

export const USER_PROFILE_FRAGMENT = gql`
  fragment UserDropdown_viewer on Viewer {
    users {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

export default function UserDropDown({
  onChange,
  selectedUserId,
  viewer,
}: {
  onChange: (selectedUserId: string) => void;
  selectedUserId: string;
  viewer: appQuery_viewer;
}) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.currentTarget.value);
  };
  return (
    <select onChange={handleChange} value={selectedUserId}>
      {viewer.users.edges.map((user) => (
        <option key={user.node.id} value={fromGlobalId(user.node.id).id}>
          {user.node.name}
        </option>
      ))}
    </select>
  );
}
