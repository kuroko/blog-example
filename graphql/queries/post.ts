import { gql } from "@apollo/client"

export const getPostByPathQuery = gql`
    query getPostByPath($path: String!) {
        post(path: $path) {
            title
        }
    }
`
