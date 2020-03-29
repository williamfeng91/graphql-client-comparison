/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserDropdown_viewer
// ====================================================

export interface UserDropdown_viewer_users_edges_node {
  __typename: "User";
  id: string;
  name: string;
}

export interface UserDropdown_viewer_users_edges {
  __typename: "UserEdge";
  node: UserDropdown_viewer_users_edges_node;
}

export interface UserDropdown_viewer_users {
  __typename: "UserConnection";
  edges: UserDropdown_viewer_users_edges[];
}

export interface UserDropdown_viewer {
  __typename: "Viewer";
  users: UserDropdown_viewer_users;
}
