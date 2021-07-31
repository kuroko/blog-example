import React from "react"
import { GetServerSideProps } from "next"
import Head from "next/head"

import { Jumbotron } from "components/Jumbotron"
import { graphqlClient } from "constants/graphqlClient"
import { CategoryPageCategoryFragment, getSdk, Maybe, PostListFieldsFragment } from "generated/graphql"
import { PostsList } from "components/PostsList"

export type CategoryQuery = {
  path: string[]
}

export type CategoryProps = {
  category: CategoryPageCategoryFragment
  posts?: Maybe<PostListFieldsFragment[]>
}

export default function Category({ category, posts }: CategoryProps) {
  return (
    <div>
      <Head>
        <title>{category?.title} &bull; Blog Example</title>
      </Head>

      <Jumbotron title={`Posts in '${category.title}'`} description={category.description} />
      <PostsList title="Posts" posts={posts} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<CategoryProps, CategoryQuery> = async context => {
  const client = getSdk(graphqlClient)
  const resp = await client.categoryPageContent({ path: `/categories/${context.params?.path.join("/")}` })

  if (!resp.category) {
    return { notFound: true }
  }

  return {
    props: {
      category: resp.category,
      posts: resp.posts as Maybe<PostListFieldsFragment[]>,
    },
  }
}
