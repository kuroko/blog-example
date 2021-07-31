import React, { useCallback, useState } from "react"
import Image from "next/image"

import { Post_Content_GallerySection } from "generated/graphql"
import { GalleryImage } from "components/PostContent/styles"

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

  const image = content.images[index]

  if (!content.images.length || !image) {
    return <></>
  }

  return (
    <div style={{ position: "relative" }}>
      <GalleryImage>
        <Image
          width={image.metadata?.width || 0}
          height={image.metadata?.height || 0}
          src={image.publicUrl || ""}
          alt={image.name}
        />
      </GalleryImage>
      <button onClick={onPrev}>Prev</button>
      <button onClick={onNext}>Next</button>
    </div>
  )
}
