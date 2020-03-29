/* tslint:disable */
/* eslint-disable */
/* @relayHash 2207db77a9e977232c3d88b19be00f2e */

import { ConcreteRequest } from "relay-runtime";
export type CompletedTaskInput = {
    taskAssignmentId: string;
    timeKey: string;
};
export type TaskCreateCompletedTaskMutationVariables = {
    input: CompletedTaskInput;
};
export type TaskCreateCompletedTaskMutationResponse = {
    readonly createCompletedTask: {
        readonly completedTaskEdge: {
            readonly __typename: string;
            readonly cursor: string;
            readonly node: {
                readonly id: string;
                readonly timeKey: string;
            };
        };
    } | null;
};
export type TaskCreateCompletedTaskMutation = {
    readonly response: TaskCreateCompletedTaskMutationResponse;
    readonly variables: TaskCreateCompletedTaskMutationVariables;
};



/*
mutation TaskCreateCompletedTaskMutation(
  $input: CompletedTaskInput!
) {
  createCompletedTask(input: $input) {
    completedTaskEdge {
      __typename
      cursor
      node {
        id
        timeKey
      }
    }
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
    "name": "createCompletedTask",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateCompletedTaskPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "completedTaskEdge",
        "storageKey": null,
        "args": null,
        "concreteType": "CompletedTaskEdge",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "cursor",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "CompletedTask",
            "plural": false,
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
                "name": "timeKey",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TaskCreateCompletedTaskMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TaskCreateCompletedTaskMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "TaskCreateCompletedTaskMutation",
    "id": null,
    "text": "mutation TaskCreateCompletedTaskMutation(\n  $input: CompletedTaskInput!\n) {\n  createCompletedTask(input: $input) {\n    completedTaskEdge {\n      __typename\n      cursor\n      node {\n        id\n        timeKey\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '5d73990e14353675b1be900375ad7519';
export default node;
