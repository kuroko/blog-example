import { gql } from "graphql-tag"
import { postListFieldsFragment } from "graphql/fragments"

export const homepagePartsFragment = gql`
  fragment HomepageParts on Homepage {
    parts {
      __typename

      ...on Homepage_Parts_PostsListSection {
        title
      }

      ...on Homepage_Parts_TextSection {
        title
        text
      }
    }
  }
`

export const homepageContentQuery = gql`
  query homepageContent {
    homepage(path: "/index") {
      intro
      ...HomepageParts
    }

    posts: entries(
      filters: { contentType: { eq: "post" } }
      orderBy: [{ field: CREATED_AT, direction: DESC }]
      limit: 100
      offset: 0
    ) {
      ... on Post {
        ...PostListFields
      }
    }
  }

  ${homepagePartsFragment}
  ${postListFieldsFragment}
`
