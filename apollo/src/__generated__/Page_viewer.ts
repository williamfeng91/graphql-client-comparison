/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Page_viewer
// ====================================================

export interface Page_viewer_user_assignedTasks_edges_node_completedTasks_edges_node {
  __typename: "CompletedTask";
  id: string;
  timeKey: string;
}

export interface Page_viewer_user_assignedTasks_edges_node_completedTasks_edges {
  __typename: "CompletedTaskEdge";
  node: Page_viewer_user_assignedTasks_edges_node_completedTasks_edges_node;
}

export interface Page_viewer_user_assignedTasks_edges_node_completedTasks {
  __typename: "CompletedTaskConnection";
  edges: Page_viewer_user_assignedTasks_edges_node_completedTasks_edges[];
}

export interface Page_viewer_user_assignedTasks_edges_node {
  __typename: "TaskAssignment";
  id: string;
  completedTasks: Page_viewer_user_assignedTasks_edges_node_completedTasks;
  name: string;
}

export interface Page_viewer_user_assignedTasks_edges {
  __typename: "TaskAssignmentEdge";
  node: Page_viewer_user_assignedTasks_edges_node;
}

export interface Page_viewer_user_assignedTasks {
  __typename: "TaskAssignmentConnection";
  edges: Page_viewer_user_assignedTasks_edges[];
}

export interface Page_viewer_user {
  __typename: "User";
  assignedTasks: Page_viewer_user_assignedTasks;
}

export interface Page_viewer_users_edges_node {
  __typename: "User";
  id: string;
  name: string;
}

export interface Page_viewer_users_edges {
  __typename: "UserEdge";
  node: Page_viewer_users_edges_node;
}

export interface Page_viewer_users {
  __typename: "UserConnection";
  edges: Page_viewer_users_edges[];
}

export interface Page_viewer {
  __typename: "Viewer";
  user: Page_viewer_user | null;
  users: Page_viewer_users;
}
