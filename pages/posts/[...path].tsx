import { GetServerSideProps } from "next"
import Head from "next/head"

import { graphqlClient } from "constants/graphqlClient"
import { getSdk, PostFieldsFragment } from "generated/graphql"
import { PostContent } from "components/PostContent"
import { PostHeader } from "components/PostHeader"

export type PostQuery = {
  path: string[]
}

export type PostProps = {
  post: PostFieldsFragment
}

export default function Post(props: PostProps) {
  return (
    <div>
      <Head>
        <title>{props.post.title} &bull; Blog Example</title>
      </Head>

      <PostHeader post={props.post} />
      <PostContent content={props.post.content} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<PostProps, PostQuery> = async context => {
  const client = getSdk(graphqlClient)
  const resp = await client.getPostByPath({ path: `/posts/${context.params?.path.join("/")}` })

  if (!resp.post) {
    return { notFound: true }
  }

  return {
    props: {
      post: resp.post,
    },
  }
}
