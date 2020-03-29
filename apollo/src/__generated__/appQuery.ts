/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: appQuery
// ====================================================

export interface appQuery_viewer_user_assignedTasks_edges_node_completedTasks_edges_node {
  __typename: "CompletedTask";
  id: string;
  timeKey: string;
}

export interface appQuery_viewer_user_assignedTasks_edges_node_completedTasks_edges {
  __typename: "CompletedTaskEdge";
  node: appQuery_viewer_user_assignedTasks_edges_node_completedTasks_edges_node;
}

export interface appQuery_viewer_user_assignedTasks_edges_node_completedTasks {
  __typename: "CompletedTaskConnection";
  edges: appQuery_viewer_user_assignedTasks_edges_node_completedTasks_edges[];
}

export interface appQuery_viewer_user_assignedTasks_edges_node {
  __typename: "TaskAssignment";
  id: string;
  completedTasks: appQuery_viewer_user_assignedTasks_edges_node_completedTasks;
  name: string;
}

export interface appQuery_viewer_user_assignedTasks_edges {
  __typename: "TaskAssignmentEdge";
  node: appQuery_viewer_user_assignedTasks_edges_node;
}

export interface appQuery_viewer_user_assignedTasks {
  __typename: "TaskAssignmentConnection";
  edges: appQuery_viewer_user_assignedTasks_edges[];
}

export interface appQuery_viewer_user {
  __typename: "User";
  assignedTasks: appQuery_viewer_user_assignedTasks;
}

export interface appQuery_viewer_users_edges_node {
  __typename: "User";
  id: string;
  name: string;
}

export interface appQuery_viewer_users_edges {
  __typename: "UserEdge";
  node: appQuery_viewer_users_edges_node;
}

export interface appQuery_viewer_users {
  __typename: "UserConnection";
  edges: appQuery_viewer_users_edges[];
}

export interface appQuery_viewer {
  __typename: "Viewer";
  user: appQuery_viewer_user | null;
  users: appQuery_viewer_users;
}

export interface appQuery {
  viewer: appQuery_viewer;
}

export interface appQueryVariables {
  userId: string;
}
