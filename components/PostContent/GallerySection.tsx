import React from "react"
import Image from "next/image"

import { Post_Content_GallerySection } from "generated/graphql"

export type GallerySectionProps = {
  content: Post_Content_GallerySection
}

export const GallerySection = (props: GallerySectionProps) => {
  return (
    <div style={{ position: "relative" }}>
      {props.content.items.map((item, i) => (
        <Image
          key={i}
          width={item?.image.metadata?.width || 0}
          height={item?.image.metadata?.height || 0}
          src={item?.image.publicUrl || ""}
          alt={item?.caption}
        />
      ))}
    </div>
  )
}
