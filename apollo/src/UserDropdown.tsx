import gql from 'graphql-tag';
import React from 'react';

import { UserProfile } from './__generated__/UserProfile';

export const USER_PROFILE_FRAGMENT = gql`
  fragment UserProfile on User {
    id
    name
  }
`;

export default function UserDropDown({
  onChange,
  selectedUserId,
  users,
}: {
  onChange: (selectedUserId: string) => void;
  selectedUserId: string;
  users: UserProfile[];
}) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.currentTarget.value);
  };
  return (
    <select onChange={handleChange} value={selectedUserId}>
      {users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
}
