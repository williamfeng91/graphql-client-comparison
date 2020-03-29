/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Task_taskAssignment = {
    readonly id: string;
    readonly name: string;
    readonly " $refType": "Task_taskAssignment";
};
export type Task_taskAssignment$data = Task_taskAssignment;
export type Task_taskAssignment$key = {
    readonly " $data"?: Task_taskAssignment$data;
    readonly " $fragmentRefs": FragmentRefs<"Task_taskAssignment">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Task_taskAssignment",
  "type": "TaskAssignment",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'a1f94efaa19b7c30d05a86cb7147b34d';
export default node;
