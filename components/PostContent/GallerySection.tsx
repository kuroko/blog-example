import React from "react"
import Image from "next/image"
import SwiperCore, { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import { Carousel, CarouselSlide } from "components/PostContent/styles"
import { Post_Content_GallerySection } from "generated/graphql"

import "swiper/swiper-bundle.css"

// install Virtual module
SwiperCore.use([Navigation, Pagination])

export type GallerySectionProps = {
  content: Post_Content_GallerySection
}

export const GallerySection = ({ content }: GallerySectionProps) => {
  if (!content.images.length) {
    return <></>
  }

  return (
    <Carousel>
      <Swiper
        centeredSlides
        loop
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
      >
        {content.images.map((image, i) => (
          <SwiperSlide key={i}>
            <CarouselSlide>
              <Image
                priority
                width={image?.metadata?.width || 0}
                height={image?.metadata?.height || 0}
                src={image?.publicUrl || ""}
                alt={image?.name}
              />
            </CarouselSlide>
          </SwiperSlide>
        ))}
      </Swiper>
    </Carousel>
  )
}
