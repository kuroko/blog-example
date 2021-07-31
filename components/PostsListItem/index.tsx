import React from "react"
import { format } from "fecha"
import Link from "next/link"

import { Item } from "components/PostsListItem/styles"
import { PostListFieldsFragment } from "generated/graphql"

export type PostsListItemProps = {
  post: PostListFieldsFragment
}

export const PostsListItem = ({ post }: PostsListItemProps) => {
  const date = new Date(post._metadata?.createdAt)

  // TODO: Metadata should be non-nullable, surely?
  return (
    <Link href={post._metadata?.path || ""}>
      <a>
        <Item>
          <span>{post.title}</span>
          <time dateTime={post._metadata?.createdAt}>
            {format(date, "MMMM Do, YYYY")}
          </time>
        </Item>
      </a>
    </Link>
  )
}
