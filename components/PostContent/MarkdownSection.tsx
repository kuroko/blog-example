import React from "react"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import gfm from "remark-gfm"

import { Post_Content_MarkdownSection } from "generated/graphql"

export type MarkdownSectionProps = {
  content: Post_Content_MarkdownSection
}

export const MarkdownSection = (props: MarkdownSectionProps) => {
  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[gfm]}>
      {props.content.markdown}
    </ReactMarkdown>
  )
}
