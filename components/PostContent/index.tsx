import React from "react"

import {
  Maybe,
  Post_Content_GallerySection,
  Post_Content_MarkdownSection,
  PostContentFragment,
} from "generated/graphql"

import { GallerySection } from "components/PostContent/GallerySection"
import { MarkdownSection } from "components/PostContent/MarkdownSection"
import { Container, Wrapper } from "components/PostContent/styles"

export type PostContentProps = {
  content?: Maybe<PostContentFragment["content"]>
}

export const PostContent = ({ content }: PostContentProps) => {
  return (
    <Container>
      <Wrapper>
        {content?.map((item, i) => {
          switch (item?.__typename) {
            case "Post_Content_GallerySection":
              return <GallerySection key={i} content={item as Post_Content_GallerySection} />
            case "Post_Content_MarkdownSection":
              return <MarkdownSection key={i} content={item as Post_Content_MarkdownSection} />
            default:
              return <React.Fragment key={i} />
          }
        })}
      </Wrapper>
    </Container>
  )
}
