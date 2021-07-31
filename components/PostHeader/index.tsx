import React from "react"
import { format } from "fecha"
import Image from "next/image"
import Link from "next/link"
import readingTime from "reading-time"

import { Container, FeatureImage, Meta, MetaItem, Title } from "components/PostHeader/styles"
import { PostContentFragment, PostPagePostFragment } from "generated/graphql"

export type PostHeaderProps = {
  post: PostPagePostFragment
}

export const PostHeader = ({ post }: PostHeaderProps) => {
  const date = new Date(post._metadata?.createdAt)
  const text = getTextContent(post)
  const stats = readingTime(text)

  // TODO: Consumption should not return assets and relations as non nullable!!!

  return (
    <>
      <Container>
        <Title>{post.title}</Title>

        <Meta>
          {post.category && (
            <MetaItem>
              In&nbsp;
              <Link href={post.category._metadata?.path || "/"}>
                {post.category.title}
              </Link>
            </MetaItem>
          )}

          <MetaItem>
            {/* TODO: First Published At */}
            <time dateTime={post._metadata?.createdAt}>
              {format(date, "MMMM Do, YYYY")}
            </time>
          </MetaItem>

          <MetaItem>
            {stats.text}
          </MetaItem>

          {post.authors && post.authors.length > 0 && (
            <MetaItem>
              Written by&nbsp;
              {post.authors.map((author, i) => (
                <a key={i} href={author?._metadata?.path || ""}>
                  {author?.firstName} {author?.lastName}
                  {i < post.authors.length - 1 && ", "}
                </a>
              ))}
            </MetaItem>
          )}
        </Meta>
      </Container>

      {post.coverImage && (
        <FeatureImage>
          <Image
            layout="responsive"
            src={post.coverImage.publicUrl}
            width={post.coverImage.metadata?.width || 0}
            height={post.coverImage.metadata?.height || 0}
          />
        </FeatureImage>
      )}
    </>
  )
}

const getTextContent = (post: PostContentFragment) => post.content.reduce((agg, block) => {
  if (block?.__typename == "Post_Content_MarkdownSection") {
    return `${agg} ${block.markdown}` // Does this work?
  }
  return agg
}, "")
