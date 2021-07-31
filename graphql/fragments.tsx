import { gql } from "graphql-tag"

export const postListFieldsFragment = gql`
  fragment PostListFields on Post {
    _metadata {
      path
      createdAt 
    }
    title
  }
`
