/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CompletedTaskInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateCompletedTask
// ====================================================

export interface CreateCompletedTask_createCompletedTask {
  __typename: "CompletedTask";
  id: string;
}

export interface CreateCompletedTask {
  createCompletedTask: CreateCompletedTask_createCompletedTask;
}

export interface CreateCompletedTaskVariables {
  input: CompletedTaskInput;
}
