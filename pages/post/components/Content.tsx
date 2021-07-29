import React from "react"

import { Post_Content_GallerySection, Post_Content_MarkdownSection, PostFieldsFragment } from "generated/graphql";

import { GallerySection } from "./GallerySection";
import { MarkdownSection } from "./MarkdownSection";

export type ContentProps = {
    content: PostFieldsFragment["content"]
}

export const Content = ({ content }: ContentProps) => {
    return <>
        {content.map((item, i) => {
            switch (item?.__typename) {
                case "Post_Content_GallerySection":
                    return <GallerySection key={i} content={item as Post_Content_GallerySection} />
                case "Post_Content_MarkdownSection":
                    return <MarkdownSection key={i} content={item as Post_Content_MarkdownSection} />
                default:
                    return <React.Fragment key={i} />
            }
        })}
    </>
}
