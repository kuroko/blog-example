import gql from "graphql-tag";

export const assetFieldsFragment = gql`
    fragment PostFields on Post {
        title
    }
`
