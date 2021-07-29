import gql from "graphql-tag";

export const postFieldsFragment = gql`
    fragment PostFields on Post {
        coverImage {
            publicUrl
        }
        title
        content {
            __typename
            ...on Post_Content_MarkdownSection {
                markdown
            }
            ...on Post_Content_GallerySection {
                items {
                    image {
                        publicUrl
                    }
                    caption
                }
            }
        }
    }
`
