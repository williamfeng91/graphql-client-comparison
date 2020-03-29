/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TaskList_user
// ====================================================

export interface TaskList_user_assignedTasks_edges_node_completedTasks_edges_node {
  __typename: "CompletedTask";
  id: string;
  timeKey: string;
}

export interface TaskList_user_assignedTasks_edges_node_completedTasks_edges {
  __typename: "CompletedTaskEdge";
  node: TaskList_user_assignedTasks_edges_node_completedTasks_edges_node;
}

export interface TaskList_user_assignedTasks_edges_node_completedTasks {
  __typename: "CompletedTaskConnection";
  edges: TaskList_user_assignedTasks_edges_node_completedTasks_edges[];
}

export interface TaskList_user_assignedTasks_edges_node {
  __typename: "TaskAssignment";
  id: string;
  completedTasks: TaskList_user_assignedTasks_edges_node_completedTasks;
  name: string;
}

export interface TaskList_user_assignedTasks_edges {
  __typename: "TaskAssignmentEdge";
  node: TaskList_user_assignedTasks_edges_node;
}

export interface TaskList_user_assignedTasks {
  __typename: "TaskAssignmentConnection";
  edges: TaskList_user_assignedTasks_edges[];
}

export interface TaskList_user {
  __typename: "User";
  assignedTasks: TaskList_user_assignedTasks;
}
