import { GetServerSideProps } from "next"
import Image from "next/image"

import { graphqlClient } from "constants/graphqlClient"
import { getSdk, PostFieldsFragment } from "generated/graphql"
import { Content } from "pages/post/components/Content"

export type PostQuery = {
  path: string[]
}

export type PostProps = {
  post: PostFieldsFragment
}

export default function Post(props: PostProps) {
  return (
    <div>
      <Image
        width={600}
        height={337}
        src={props.post.coverImage.publicUrl}
        alt={props.post.title}
      />
      <h1>{props.post.title}</h1>
      <Content content={props.post.content} />
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
