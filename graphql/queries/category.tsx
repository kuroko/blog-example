import { gql } from "graphql-tag"
import { postListFieldsFragment } from "graphql/fragments"

export const categoryPageCategoryFragment = gql`
  fragment CategoryPageCategory on Category {
    _metadata {
      path
    }
    
    title
    description
  }
`

export const categoryPageContentQuery = gql`
  query categoryPageContent($path: String!) {
    category(path: $path) {
      ...CategoryPageCategory
    }
    
    posts: entries(
      filters: {
        contentType: { eq: "post" }
        relations: {
          contains: {
            field: "category"
            path: $path
          }
        }
      }
      orderBy: [{ field: CREATED_AT, direction: DESC }]
      limit: 100
      offset: 0
    ) {
      ... on Post {
        ...PostListFields
      }
    }
  }
  
  ${categoryPageCategoryFragment}
  ${postListFieldsFragment}
`
