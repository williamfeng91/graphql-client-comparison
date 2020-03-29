/* tslint:disable */
/* eslint-disable */
/* @relayHash 48edd986b6f5f517dd200109e03ada7f */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type appQueryVariables = {
    userId: string;
};
export type appQueryResponse = {
    readonly viewer: {
        readonly " $fragmentRefs": FragmentRefs<"Page_viewer">;
    };
};
export type appQuery = {
    readonly response: appQueryResponse;
    readonly variables: appQueryVariables;
};



/*
query appQuery(
  $userId: ID!
) {
  viewer {
    ...Page_viewer
  }
}

fragment Page_viewer on Viewer {
  users(first: 2147483647) {
    edges {
      node {
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  user(id: $userId) {
    ...TaskList_user
    id
  }
  ...UserDropdown_viewer
}

fragment TaskList_user on User {
  assignedTasks(first: 2147483647) {
    edges {
      node {
        id
        completedTasks(first: 2147483647) {
          edges {
            node {
              id
              timeKey
              __typename
            }
            cursor
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
        ...Task_taskAssignment
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment Task_taskAssignment on TaskAssignment {
  id
  name
}

fragment UserDropdown_viewer on Viewer {
  users(first: 2147483647) {
    edges {
      node {
        id
        name
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "userId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 2147483647
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v6 = {
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
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "appQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Page_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "appQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "users",
            "storageKey": "users(first:2147483647)",
            "args": (v1/*: any*/),
            "concreteType": "UserConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "UserEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v4/*: any*/)
                    ]
                  },
                  (v5/*: any*/)
                ]
              },
              (v6/*: any*/)
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "users",
            "args": (v1/*: any*/),
            "handle": "connection",
            "key": "Page_users",
            "filters": null
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "users",
            "args": (v1/*: any*/),
            "handle": "connection",
            "key": "UsersDropdown_users",
            "filters": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "userId"
              }
            ],
            "concreteType": "User",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "assignedTasks",
                "storageKey": "assignedTasks(first:2147483647)",
                "args": (v1/*: any*/),
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
                          (v2/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "completedTasks",
                            "storageKey": "completedTasks(first:2147483647)",
                            "args": (v1/*: any*/),
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
                                      (v2/*: any*/),
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "timeKey",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      (v3/*: any*/)
                                    ]
                                  },
                                  (v5/*: any*/)
                                ]
                              },
                              (v6/*: any*/)
                            ]
                          },
                          {
                            "kind": "LinkedHandle",
                            "alias": null,
                            "name": "completedTasks",
                            "args": (v1/*: any*/),
                            "handle": "connection",
                            "key": "TaskList_completedTasks",
                            "filters": null
                          },
                          (v4/*: any*/),
                          (v3/*: any*/)
                        ]
                      },
                      (v5/*: any*/)
                    ]
                  },
                  (v6/*: any*/)
                ]
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "name": "assignedTasks",
                "args": (v1/*: any*/),
                "handle": "connection",
                "key": "TaskList_assignedTasks",
                "filters": null
              },
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "appQuery",
    "id": null,
    "text": "query appQuery(\n  $userId: ID!\n) {\n  viewer {\n    ...Page_viewer\n  }\n}\n\nfragment Page_viewer on Viewer {\n  users(first: 2147483647) {\n    edges {\n      node {\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  user(id: $userId) {\n    ...TaskList_user\n    id\n  }\n  ...UserDropdown_viewer\n}\n\nfragment TaskList_user on User {\n  assignedTasks(first: 2147483647) {\n    edges {\n      node {\n        id\n        completedTasks(first: 2147483647) {\n          edges {\n            node {\n              id\n              timeKey\n              __typename\n            }\n            cursor\n          }\n          pageInfo {\n            endCursor\n            hasNextPage\n          }\n        }\n        ...Task_taskAssignment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment Task_taskAssignment on TaskAssignment {\n  id\n  name\n}\n\nfragment UserDropdown_viewer on Viewer {\n  users(first: 2147483647) {\n    edges {\n      node {\n        id\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'e9531880b66464776ee3da066b36ddb7';
export default node;
