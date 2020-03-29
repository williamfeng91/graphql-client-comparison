/* tslint:disable */
/* eslint-disable */
/* @relayHash 6cfdf47715d32f9555e9c1b90c1a1602 */

import { ConcreteRequest } from "relay-runtime";
export type CompletedTaskInput = {
    taskAssignmentId: string;
    timeKey: string;
};
export type TaskDestroyCompletedTaskMutationVariables = {
    input: CompletedTaskInput;
};
export type TaskDestroyCompletedTaskMutationResponse = {
    readonly destroyCompletedTask: {
        readonly destroyedCompletedTaskIds: ReadonlyArray<string>;
    };
};
export type TaskDestroyCompletedTaskMutation = {
    readonly response: TaskDestroyCompletedTaskMutationResponse;
    readonly variables: TaskDestroyCompletedTaskMutationVariables;
};



/*
mutation TaskDestroyCompletedTaskMutation(
  $input: CompletedTaskInput!
) {
  destroyCompletedTask(input: $input) {
    destroyedCompletedTaskIds
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CompletedTaskInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "destroyCompletedTask",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DestroyCompletedTaskPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "destroyedCompletedTaskIds",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TaskDestroyCompletedTaskMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TaskDestroyCompletedTaskMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "TaskDestroyCompletedTaskMutation",
    "id": null,
    "text": "mutation TaskDestroyCompletedTaskMutation(\n  $input: CompletedTaskInput!\n) {\n  destroyCompletedTask(input: $input) {\n    destroyedCompletedTaskIds\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '69fa30aa01735a2a03a5a3976c991626';
export default node;
