/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TaskAssignmentInput, Frequency } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: NewTaskButtonAssignTaskMutation
// ====================================================

export interface NewTaskButtonAssignTaskMutation_assignTask_taskAssignmentEdge_node_completedTasks_edges_node {
  __typename: "CompletedTask";
  id: string;
  timeKey: string;
}

export interface NewTaskButtonAssignTaskMutation_assignTask_taskAssignmentEdge_node_completedTasks_edges {
  __typename: "CompletedTaskEdge";
  node: NewTaskButtonAssignTaskMutation_assignTask_taskAssignmentEdge_node_completedTasks_edges_node;
}

export interface NewTaskButtonAssignTaskMutation_assignTask_taskAssignmentEdge_node_completedTasks {
  __typename: "CompletedTaskConnection";
  edges: NewTaskButtonAssignTaskMutation_assignTask_taskAssignmentEdge_node_completedTasks_edges[];
}

export interface NewTaskButtonAssignTaskMutation_assignTask_taskAssignmentEdge_node {
  __typename: "TaskAssignment";
  id: string;
  name: string;
  frequency: Frequency;
  completedTasks: NewTaskButtonAssignTaskMutation_assignTask_taskAssignmentEdge_node_completedTasks;
}

export interface NewTaskButtonAssignTaskMutation_assignTask_taskAssignmentEdge {
  __typename: "TaskAssignmentEdge";
  cursor: string;
  node: NewTaskButtonAssignTaskMutation_assignTask_taskAssignmentEdge_node;
}

export interface NewTaskButtonAssignTaskMutation_assignTask {
  __typename: "AssignTaskPayload";
  taskAssignmentEdge: NewTaskButtonAssignTaskMutation_assignTask_taskAssignmentEdge;
}

export interface NewTaskButtonAssignTaskMutation {
  assignTask: NewTaskButtonAssignTaskMutation_assignTask;
}

export interface NewTaskButtonAssignTaskMutationVariables {
  input: TaskAssignmentInput;
}
