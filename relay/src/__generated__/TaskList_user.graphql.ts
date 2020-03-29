/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TaskList_user = {
    readonly assignedTasks: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly completedTasks: {
                    readonly edges: ReadonlyArray<{
                        readonly node: {
                            readonly id: string;
                            readonly timeKey: string;
                        };
                    }>;
                };
                readonly " $fragmentRefs": FragmentRefs<"Task_taskAssignment">;
            };
        }>;
    };
    readonly " $refType": "TaskList_user";
};
export type TaskList_user$data = TaskList_user;
export type TaskList_user$key = {
    readonly " $data"?: TaskList_user$data;
    readonly " $fragmentRefs": FragmentRefs<"TaskList_user">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "pageInfo",
  "storageKey": null,
  "args": null,
  "concreteType": "PageInfo",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "endCursor",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hasNextPage",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Fragment",
  "name": "TaskList_user",
  "type": "User",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": null
      },
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "assignedTasks"
        ]
      }
    ]
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "assignedTasks",
      "name": "__TaskList_assignedTasks_connection",
      "storageKey": null,
      "args": null,
      "concreteType": "TaskAssignmentConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "TaskAssignmentEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "TaskAssignment",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "kind": "LinkedField",
                  "alias": "completedTasks",
                  "name": "__TaskList_completedTasks_connection",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "CompletedTaskConnection",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "edges",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "CompletedTaskEdge",
                      "plural": true,
                      "selections": [
                        {
                          "kind": "LinkedField",
                          "alias": null,
                          "name": "node",
                          "storageKey": null,
                          "args": null,
                          "concreteType": "CompletedTask",
                          "plural": false,
                          "selections": [
                            (v0/*: any*/),
                            {
                              "kind": "ScalarField",
                              "alias": null,
                              "name": "timeKey",
                              "args": null,
                              "storageKey": null
                            },
                            (v1/*: any*/)
                          ]
                        },
                        (v2/*: any*/)
                      ]
                    },
                    (v3/*: any*/)
                  ]
                },
                (v1/*: any*/),
                {
                  "kind": "FragmentSpread",
                  "name": "Task_taskAssignment",
                  "args": null
                }
              ]
            },
            (v2/*: any*/)
          ]
        },
        (v3/*: any*/)
      ]
    }
  ]
};
})();
(node as any).hash = '5eee8bb4ed876c027754ee034be5f275';
export default node;
