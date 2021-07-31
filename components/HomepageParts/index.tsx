import React from "react"

import { Homepage_Parts_TextSection, HomepagePartsFragment, Maybe, PostListFieldsFragment } from "generated/graphql"
import { TextSection } from "components/HomepageParts/TextSection"
import { PostsList } from "components/PostsList"

export type HomepagePartsProps = {
  parts?: Maybe<HomepagePartsFragment["parts"]>
  posts?: Maybe<PostListFieldsFragment[]>
}

export const HomepageParts = ({ parts, posts }: HomepagePartsProps) => {
  return (
    <>
      {parts?.map((item, i) => {
        switch (item?.__typename) {
          case "Homepage_Parts_PostsListSection":
            return <PostsList key={i} title={item?.title} posts={posts} />
          // return <GallerySection key={i} content={item as Post_Content_GallerySection} />
          case "Homepage_Parts_TextSection":
            return <TextSection key={i} content={item as Homepage_Parts_TextSection} />
          default:
            return <React.Fragment key={i} />
        }
      })}
    </>
  )
}
