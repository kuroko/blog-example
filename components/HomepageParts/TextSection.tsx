import React from "react"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import gfm from "remark-gfm"

import { Container, Wrapper } from "components/HomepageParts/styles"
import { Homepage_Parts_TextSection } from "generated/graphql"

export type TextSectionProps = {
  content: Homepage_Parts_TextSection
}

export const TextSection = ({ content }: TextSectionProps) => {
  return (
    <Container>
      <Wrapper>
        <h4>{content.title}</h4>

        <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[gfm]}>
          {content.text}
        </ReactMarkdown>
      </Wrapper>
    </Container>
  )
}
