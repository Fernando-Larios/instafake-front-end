/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PostModalPostQueryVariables = {
    id: string;
};
export type PostModalPostQueryResponse = {
    readonly post: {
        readonly " $fragmentRefs": FragmentRefs<"Post_post">;
    } | null;
};
export type PostModalPostQuery = {
    readonly response: PostModalPostQueryResponse;
    readonly variables: PostModalPostQueryVariables;
};



/*
query PostModalPostQuery(
  $id: ID!
) {
  post(id: $id) {
    ...Post_post
    id
  }
}

fragment Actions_post on Post {
  ...BookmarkButton_post
  ...LikeButton_subject
}

fragment BookmarkButton_post on Post {
  id
  viewerHasBookmarked
}

fragment CommentTextArea_post on Post {
  id
}

fragment Comment_comment on Comment {
  ...LikeButton_subject
  text
  user {
    username
    id
  }
}

fragment Gallery_images on Image {
  url
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
    likes(first: 1) {
      pageInfo {
        total
      }
    }
  }
}

fragment Post_post on Post {
  ...Actions_post
  ...CommentTextArea_post
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
  images {
    ...Gallery_images
  }
  likes(first: 1) {
    pageInfo {
      total
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
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
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "total",
  "storageKey": null
},
v5 = {
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
    (v2/*: any*/)
  ],
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "viewerHasLiked",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "first",
      "value": 1
    }
  ],
  "concreteType": "LikeConnection",
  "kind": "LinkedField",
  "name": "likes",
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
        (v4/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": "likes(first:1)"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PostModalPostQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "post",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Post_post"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PostModalPostQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "post",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "viewerHasBookmarked",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v3/*: any*/),
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
                  (v4/*: any*/),
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
                      (v5/*: any*/),
                      (v2/*: any*/),
                      (v6/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v7/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v8/*: any*/)
                            ],
                            "type": "Post",
                            "abstractKey": null
                          }
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
            "args": (v3/*: any*/),
            "filters": [],
            "handle": "connection",
            "key": "Post_comments",
            "kind": "LinkedHandle",
            "name": "comments"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "images",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "url",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v8/*: any*/),
          (v5/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v6/*: any*/),
              (v7/*: any*/)
            ],
            "type": "Likeable",
            "abstractKey": "__isLikeable"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "baea26a04a105109dd73e890b940500f",
    "id": null,
    "metadata": {},
    "name": "PostModalPostQuery",
    "operationKind": "query",
    "text": "query PostModalPostQuery(\n  $id: ID!\n) {\n  post(id: $id) {\n    ...Post_post\n    id\n  }\n}\n\nfragment Actions_post on Post {\n  ...BookmarkButton_post\n  ...LikeButton_subject\n}\n\nfragment BookmarkButton_post on Post {\n  id\n  viewerHasBookmarked\n}\n\nfragment CommentTextArea_post on Post {\n  id\n}\n\nfragment Comment_comment on Comment {\n  ...LikeButton_subject\n  text\n  user {\n    username\n    id\n  }\n}\n\nfragment Gallery_images on Image {\n  url\n}\n\nfragment LikeButton_subject on Likeable {\n  __isLikeable: __typename\n  __typename\n  viewerHasLiked\n  ... on Comment {\n    id\n  }\n  ... on Post {\n    id\n    likes(first: 1) {\n      pageInfo {\n        total\n      }\n    }\n  }\n}\n\nfragment Post_post on Post {\n  ...Actions_post\n  ...CommentTextArea_post\n  description\n  id\n  comments(first: 3, orderBy: {column: CREATED_AT, order: DESC}) {\n    pageInfo {\n      total\n      endCursor\n      hasNextPage\n    }\n    edges {\n      node {\n        ...Comment_comment\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n  images {\n    ...Gallery_images\n  }\n  likes(first: 1) {\n    pageInfo {\n      total\n    }\n  }\n  user {\n    username\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '3b298e89dae47df3e88cb46683349381';
export default node;
