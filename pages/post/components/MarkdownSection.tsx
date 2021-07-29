import React from "react"

import { Post_Content_MarkdownSection } from "generated/graphql";

export type MarkdownSectionProps = {
    content: Post_Content_MarkdownSection
}

export const MarkdownSection = (props: MarkdownSectionProps) => {
    return <p>{props.content.markdown}</p>
}
