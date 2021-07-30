import gql from "graphql-tag"

export const postFieldsFragment = gql`
  fragment PostFields on Post {
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

    content {
      __typename
      ... on Post_Content_MarkdownSection {
        markdown
      }
      ... on Post_Content_GallerySection {
        items {
          image {
            publicUrl
            metadata {
              ...on K4oAssetImageMetadata {
                width
                height
              }
            }
          }
          caption
        }
      }
    }
  }
`
