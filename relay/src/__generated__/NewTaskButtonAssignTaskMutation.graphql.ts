/* tslint:disable */
/* eslint-disable */
/* @relayHash 24dcbc45b12d78b23a935535ae4f6a66 */

import { ConcreteRequest } from "relay-runtime";
export type Frequency = "DAILY" | "WEEKLY" | "%future added value";
export type TaskAssignmentInput = {
    name: string;
    frequency: Frequency;
    userId: string;
};
export type NewTaskButtonAssignTaskMutationVariables = {
    input: TaskAssignmentInput;
};
export type NewTaskButtonAssignTaskMutationResponse = {
    readonly assignTask: {
        readonly taskAssignmentEdge: {
            readonly __typename: string;
            readonly cursor: string;
            readonly node: {
                readonly id: string;
                readonly name: string;
                readonly frequency: Frequency;
            };
        };
    };
};
export type NewTaskButtonAssignTaskMutation = {
    readonly response: NewTaskButtonAssignTaskMutationResponse;
    readonly variables: NewTaskButtonAssignTaskMutationVariables;
};



/*
mutation NewTaskButtonAssignTaskMutation(
  $input: TaskAssignmentInput!
) {
  assignTask(input: $input) {
    taskAssignmentEdge {
      __typename
      cursor
      node {
        id
        name
        frequency
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
    "type": "TaskAssignmentInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "assignTask",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AssignTaskPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "taskAssignmentEdge",
        "storageKey": null,
        "args": null,
        "concreteType": "TaskAssignmentEdge",
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
            "concreteType": "TaskAssignment",
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
                "name": "name",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "frequency",
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
    "name": "NewTaskButtonAssignTaskMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "NewTaskButtonAssignTaskMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "NewTaskButtonAssignTaskMutation",
    "id": null,
    "text": "mutation NewTaskButtonAssignTaskMutation(\n  $input: TaskAssignmentInput!\n) {\n  assignTask(input: $input) {\n    taskAssignmentEdge {\n      __typename\n      cursor\n      node {\n        id\n        name\n        frequency\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '7765b17dbae662709ea35fb5e9903f8e';
export default node;
