import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient("https://consumption.kurokocms.com/graphql", {
    headers: {
        "X-Kuroko-Project": "example-blog.2975"
    }
})
