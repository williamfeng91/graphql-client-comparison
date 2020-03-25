/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUser
// ====================================================

export interface GetUser_user_assignedTasks_completedTasks {
  __typename: "CompletedTask";
  id: string;
  timeKey: string;
}

export interface GetUser_user_assignedTasks {
  __typename: "TaskAssignment";
  id: string;
  completedTasks: GetUser_user_assignedTasks_completedTasks[];
  name: string;
}

export interface GetUser_user {
  __typename: "User";
  assignedTasks: GetUser_user_assignedTasks[];
}

export interface GetUser {
  user: GetUser_user | null;
}

export interface GetUserVariables {
  userId: string;
}
