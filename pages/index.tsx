import React from "react"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import Head from "next/head"

import { HomepageParts } from "components/HomepageParts"
import { Jumbotron } from "components/Jumbotron"
import { graphqlClient } from "constants/graphqlClient"
import { getSdk, HomepageContentQuery, Maybe, PostListFieldsFragment } from "generated/graphql"

export type HomeProps = {
  homepage: HomepageContentQuery["homepage"]
  posts?: Maybe<PostListFieldsFragment[]>
}

export default function Home({ homepage, posts }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Blog Example</title>
      </Head>

      <Jumbotron description={homepage?.intro} isMasthead />
      <HomepageParts parts={homepage?.parts} posts={posts} />
    </>
  )
}


export const getServerSideProps: GetServerSideProps<HomeProps> = async context => {
  const client = getSdk(graphqlClient)
  const resp = await client.homepageContent()

  if (!resp.homepage) {
    return { notFound: true }
  }

  return {
    props: {
      homepage: resp.homepage,
      posts: resp.posts as Maybe<PostListFieldsFragment[]>, // TODO: Annoying... better way?
    },
  }
}
