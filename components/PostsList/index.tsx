import React from "react"

import { Container, Title } from "components/PostsList/styles"
import { PostsListItem } from "components/PostsListItem"
import { Maybe, PostListFieldsFragment } from "generated/graphql"

export type PostsListProps = {
  title: string
  posts?: Maybe<PostListFieldsFragment[]>
}

export const PostsList = ({ title, posts }: PostsListProps) => {
  return (
    <Container>
      <Title>{title}</Title>

      {posts?.map((post, i) => (
        <PostsListItem key={i} post={post} />
      ))}
    </Container>
  )
}
