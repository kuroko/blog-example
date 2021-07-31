import { gql } from "graphql-tag"
import { postListFieldsFragment } from "graphql/fragments"

export const personPagePersonFragment = gql`
  fragment PersonPagePerson on Person {
    _metadata {
      path
    }

    firstName
    lastName
    bio
  }
`

export const personPagePersonQuery = gql`
  query personPagePerson($path: String!) {
    person(path: $path) {
      ...PersonPagePerson
    }

    posts: entries(
      filters: {
        contentType: { eq: "post" }
        relations: {
          contains: {
            field: "authors"
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

  ${personPagePersonFragment}
  ${postListFieldsFragment}
`
