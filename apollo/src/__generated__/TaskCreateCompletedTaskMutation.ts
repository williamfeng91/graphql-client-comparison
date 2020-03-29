/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CompletedTaskInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: TaskCreateCompletedTaskMutation
// ====================================================

export interface TaskCreateCompletedTaskMutation_createCompletedTask_completedTaskEdge_node {
  __typename: "CompletedTask";
  id: string;
  timeKey: string;
}

export interface TaskCreateCompletedTaskMutation_createCompletedTask_completedTaskEdge {
  __typename: "CompletedTaskEdge";
  cursor: string;
  node: TaskCreateCompletedTaskMutation_createCompletedTask_completedTaskEdge_node;
}

export interface TaskCreateCompletedTaskMutation_createCompletedTask {
  __typename: "CreateCompletedTaskPayload";
  completedTaskEdge: TaskCreateCompletedTaskMutation_createCompletedTask_completedTaskEdge;
}

export interface TaskCreateCompletedTaskMutation {
  createCompletedTask: TaskCreateCompletedTaskMutation_createCompletedTask | null;
}

export interface TaskCreateCompletedTaskMutationVariables {
  input: CompletedTaskInput;
}
