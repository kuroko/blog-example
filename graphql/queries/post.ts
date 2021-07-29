import { gql } from "graphql-tag"

export const getPostByPathQuery = gql`
    query getPostByPath($path: String!) {
        post(path: $path) {
            title
        }
    }
`
