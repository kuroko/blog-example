import React from "react"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"

import { graphqlClient } from "constants/graphqlClient"
import { PostContent } from "components/PostContent"
import { PostHeader } from "components/PostHeader"
import { getSdk, PostPagePostFragment } from "generated/graphql"

export type PostQuery = {
  path: string[]
}

export type PostProps = {
  post: PostPagePostFragment
}

export default function Post(props: PostProps) {
  return (
    <div>
      <Head>
        <title>{props.post?.title} &bull; Blog Example</title>
      </Head>

      <PostHeader post={props.post} />
      <PostContent content={props.post?.content} />
    </div>
  )
}

export const getStaticProps: GetStaticProps<PostProps, PostQuery> = async context => {
  const client = getSdk(graphqlClient)
  const resp = await client.postPageContent({ path: `/posts/${context.params?.path.join("/")}` })

  if (!resp.post) {
    return { notFound: true }
  }

  return {
    props: {
      post: resp.post,
    },
    revalidate: 15,
  }
}

export const getStaticPaths: GetStaticPaths<PostQuery> = async () => {
  const client = getSdk(graphqlClient)
  const resp = await client.postPaths()

  return {
    paths: resp.entries.map(entry => {
      const post = entry as { _metadata: { path: string } }
      return {
        params: {
          path: post._metadata.path.split("/").filter(el => !!el && el !== "posts")
        },
      }
    }),
    fallback: false,
  }
}
