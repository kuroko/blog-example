import React, { useCallback, useState } from "react"
import Image from "next/image"

import { Post_Content_GallerySection } from "generated/graphql"
import { GalleryCaption, GalleryImage } from "components/PostContent/styles"

export type GallerySectionProps = {
  content: Post_Content_GallerySection
}

export const GallerySection = ({ content }: GallerySectionProps) => {
  const [index, setIndex] = useState(0)

  const onPrev = useCallback(() => {
    setIndex(index => index - 1)
  }, [setIndex])

  const onNext = useCallback(() => {
    setIndex(index => index + 1)
  }, [setIndex])

  const image = content.items[index]

  if (!content.items.length || !image) {
    return <></>
  }

  return (
    <div style={{ position: "relative" }}>
      <GalleryImage>
        <Image
          width={image.image.metadata?.width || 0}
          height={image.image.metadata?.height || 0}
          src={image.image.publicUrl || ""}
          alt={image.caption}
        />
      </GalleryImage>

      <GalleryCaption>
        <em>{image.caption}</em>
      </GalleryCaption>
    </div>
  )
}
