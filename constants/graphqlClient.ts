import { GraphQLClient } from "graphql-request"

export const graphqlClient = new GraphQLClient("http://localhost:5010/graphql", {
  headers: {
    "X-Kuroko-Project": "example-blog.2975",
  },
})
