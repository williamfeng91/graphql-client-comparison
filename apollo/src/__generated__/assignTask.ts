/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TaskAssignmentInput, Frequency } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: assignTask
// ====================================================

export interface assignTask_assignTask_completedTasks {
  __typename: "CompletedTask";
  id: string;
  timeKey: string;
}

export interface assignTask_assignTask {
  __typename: "TaskAssignment";
  id: string;
  name: string;
  frequency: Frequency;
  completedTasks: assignTask_assignTask_completedTasks[];
}

export interface assignTask {
  assignTask: assignTask_assignTask;
}

export interface assignTaskVariables {
  input: TaskAssignmentInput;
}
