/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum Frequency {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
}

export interface CompletedTaskInput {
  taskAssignmentId: string;
  timeKey: string;
}

export interface TaskAssignmentInput {
  name: string;
  frequency: Frequency;
  userId: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
