import { gql } from "graphql-tag"

export const postContentFragment = gql`
  fragment PostContent on Post {
    content {
      __typename

      ... on Post_Content_MarkdownSection {
        markdown
      }
      
      ... on Post_Content_GallerySection {
        images {
          publicUrl
          metadata {
            ...on K4oAssetImageMetadata {
              width
              height
            }
          }
        }
      }
    }
  }
`

export const postPagePostFragment = gql`
  fragment PostPagePost on Post {
    _metadata {
      createdAt
      updatedAt
    }

    title

    category {
      ...on Category {
        _metadata {
          path
        }
        title
      }
    }

    authors {
      ...on Person {
        _metadata {
          path
        }
        firstName
        lastName
      }
    }

    coverImage {
      publicUrl
      metadata {
        ...on K4oAssetImageMetadata {
          width
          height
        }
      }
    }

    ...PostContent
  }
`

export const postPageContentQuery = gql`
  query postPageContent($path: String!) {
    post(path: $path) {
      ...PostPagePost
    }
  }
  
  ${postContentFragment}
  ${postPagePostFragment}
`
