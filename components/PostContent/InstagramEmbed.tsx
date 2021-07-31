import React from "react"
import ReactInstagramEmbed from "react-instagram-embed"
import { InstagramEmbedContainer, Container } from "components/PostContent/styles"

export type InstagramEmbedProps = {
  url: string
}

export const InstagramEmbed = ({ url }: InstagramEmbedProps) => {
  return (
    <InstagramEmbedContainer>
      <ReactInstagramEmbed
        url={url}
        clientAccessToken="1068148143638626|a9b9853d87fb33cdc31ac2ad0426818d"
        maxWidth={500}
        hideCaption={false}
        containerTagName="div"
        injectScript
      />
    </InstagramEmbedContainer>
  )
}
