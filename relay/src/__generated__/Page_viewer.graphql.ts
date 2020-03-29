/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Page_viewer = {
    readonly users: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
            };
        }>;
    };
    readonly user: {
        readonly " $fragmentRefs": FragmentRefs<"TaskList_user">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"UserDropdown_viewer">;
    readonly " $refType": "Page_viewer";
};
export type Page_viewer$data = Page_viewer;
export type Page_viewer$key = {
    readonly " $data"?: Page_viewer$data;
    readonly " $fragmentRefs": FragmentRefs<"Page_viewer">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Page_viewer",
  "type": "Viewer",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "users"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "userId",
      "type": "ID!"
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "users",
      "name": "__Page_users_connection",
      "storageKey": null,
      "args": null,
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
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
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
        }
      ]
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
          "kind": "FragmentSpread",
          "name": "TaskList_user",
          "args": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "UserDropdown_viewer",
      "args": null
    }
  ]
};
(node as any).hash = '0d74dc0413e9c60c8578dce80fa565d7';
export default node;
