import React from "react"
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"

import { Jumbotron } from "components/Jumbotron"
import { PostsList } from "components/PostsList"
import { graphqlClient } from "constants/graphqlClient"
import { getSdk, Maybe, PersonPagePersonFragment, PostListFieldsFragment } from "generated/graphql"
import { CategoryQuery } from "pages/categories/[...path]"

export type PersonQuery = {
  path: string[]
}

export type PersonProps = {
  person: PersonPagePersonFragment
  posts?: Maybe<PostListFieldsFragment[]>
}

export default function Person({ person, posts }: PersonProps) {
  return (
    <div>
      <Head>
        <title>{person?.firstName} {person?.lastName} &bull; Blog Example</title>
      </Head>

      <Jumbotron title={`Posts by ${person?.firstName} ${person?.lastName}`} description={person.bio} />
      <PostsList title="Posts" posts={posts} />
    </div>
  )
}

export const getStaticProps: GetStaticProps<PersonProps, PersonQuery> = async context => {
  const client = getSdk(graphqlClient)
  const resp = await client.personPagePerson({ path: `/people/${context.params?.path.join("/")}` })

  if (!resp.person) {
    return { notFound: true }
  }

  return {
    props: {
      person: resp.person,
      posts: resp.posts as Maybe<PostListFieldsFragment[]>,
    },
    revalidate: 15,
  }
}

export const getStaticPaths: GetStaticPaths<CategoryQuery> = async () => {
  const client = getSdk(graphqlClient)
  const resp = await client.personPaths()

  return {
    paths: resp.entries.map(entry => {
      const person = entry as { _metadata: { path: string } }
      return {
        params: {
          path: person._metadata.path.split("/").filter(el => !!el && el !== "people"),
        },
      }
    }),
    fallback: false,
  }
}
