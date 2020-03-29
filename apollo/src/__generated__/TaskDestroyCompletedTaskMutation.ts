/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CompletedTaskInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: TaskDestroyCompletedTaskMutation
// ====================================================

export interface TaskDestroyCompletedTaskMutation_destroyCompletedTask {
  __typename: "DestroyCompletedTaskPayload";
  destroyedCompletedTaskIds: string[];
}

export interface TaskDestroyCompletedTaskMutation {
  destroyCompletedTask: TaskDestroyCompletedTaskMutation_destroyCompletedTask;
}

export interface TaskDestroyCompletedTaskMutationVariables {
  input: CompletedTaskInput;
}
