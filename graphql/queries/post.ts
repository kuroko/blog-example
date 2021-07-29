import { gql } from "graphql-tag"
import { postFieldsFragment } from "../fragments";

export const getPostByPathQuery = gql`
    query getPostByPath($path: String!) {
        post(path: $path) {
            ...PostFields
        }
    }
    
    ${postFieldsFragment}
`
