/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TimelinePostsQueryVariables = {};
export type TimelinePostsQueryResponse = {
    readonly posts: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly " $fragmentRefs": FragmentRefs<"Post_post">;
            } | null;
        } | null> | null;
    } | null;
};
export type TimelinePostsQuery = {
    readonly response: TimelinePostsQueryResponse;
    readonly variables: TimelinePostsQueryVariables;
};



/*
query TimelinePostsQuery {
  posts(first: 1) {
    edges {
      node {
        ...Post_post
        id
      }
    }
  }
}

fragment Comment_comment on Comment {
  ...LikeButton_subject
  text
  user {
    username
    id
  }
}

fragment LikeButton_subject on Likeable {
  __isLikeable: __typename
  __typename
  viewerHasLiked
  ... on Comment {
    id
  }
  ... on Post {
    id
  }
}

fragment Post_post on Post {
  ...LikeButton_subject
  description
  id
  comments(first: 3, orderBy: {column: CREATED_AT, order: DESC}) {
    pageInfo {
      total
      endCursor
      hasNextPage
    }
    edges {
      node {
        ...Comment_comment
        id
        __typename
      }
      cursor
    }
  }
  user {
    username
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 3
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "column": "CREATED_AT",
      "order": "DESC"
    }
  }
],
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "user",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "username",
      "storageKey": null
    },
    (v1/*: any*/)
  ],
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "viewerHasLiked",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TimelinePostsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "PostConnection",
        "kind": "LinkedField",
        "name": "posts",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PostEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Post",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "Post_post"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "posts(first:1)"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TimelinePostsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "PostConnection",
        "kind": "LinkedField",
        "name": "posts",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PostEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Post",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "description",
                    "storageKey": null
                  },
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": (v2/*: any*/),
                    "concreteType": "CommentConnection",
                    "kind": "LinkedField",
                    "name": "comments",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "PageInfo",
                        "kind": "LinkedField",
                        "name": "pageInfo",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "total",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "endCursor",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "hasNextPage",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CommentEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Comment",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "text",
                                "storageKey": null
                              },
                              (v3/*: any*/),
                              (v1/*: any*/),
                              (v4/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v5/*: any*/)
                                ],
                                "type": "Likeable",
                                "abstractKey": "__isLikeable"
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "cursor",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "comments(first:3,orderBy:{\"column\":\"CREATED_AT\",\"order\":\"DESC\"})"
                  },
                  {
                    "alias": null,
                    "args": (v2/*: any*/),
                    "filters": [
                      "orderBy"
                    ],
                    "handle": "connection",
                    "key": "Post_comments",
                    "kind": "LinkedHandle",
                    "name": "comments"
                  },
                  (v3/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v4/*: any*/),
                      (v5/*: any*/)
                    ],
                    "type": "Likeable",
                    "abstractKey": "__isLikeable"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "posts(first:1)"
      }
    ]
  },
  "params": {
    "cacheID": "f6790471174fb6368622bd52566c41ec",
    "id": null,
    "metadata": {},
    "name": "TimelinePostsQuery",
    "operationKind": "query",
    "text": "query TimelinePostsQuery {\n  posts(first: 1) {\n    edges {\n      node {\n        ...Post_post\n        id\n      }\n    }\n  }\n}\n\nfragment Comment_comment on Comment {\n  ...LikeButton_subject\n  text\n  user {\n    username\n    id\n  }\n}\n\nfragment LikeButton_subject on Likeable {\n  __isLikeable: __typename\n  __typename\n  viewerHasLiked\n  ... on Comment {\n    id\n  }\n  ... on Post {\n    id\n  }\n}\n\nfragment Post_post on Post {\n  ...LikeButton_subject\n  description\n  id\n  comments(first: 3, orderBy: {column: CREATED_AT, order: DESC}) {\n    pageInfo {\n      total\n      endCursor\n      hasNextPage\n    }\n    edges {\n      node {\n        ...Comment_comment\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n  user {\n    username\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ca688f425a1d81f101d48405358a9445';
export default node;
