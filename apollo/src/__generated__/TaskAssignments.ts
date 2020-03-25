/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TaskAssignments
// ====================================================

export interface TaskAssignments_completedTasks {
  __typename: "CompletedTask";
  id: string;
  timeKey: string;
}

export interface TaskAssignments {
  __typename: "TaskAssignment";
  id: string;
  completedTasks: TaskAssignments_completedTasks[];
  name: string;
}
