import { GetServerSideProps } from "next";

import { graphqlClient } from "constants/graphqlClient";
import { getSdk, PostFieldsFragment } from "generated/graphql";

export type PostQuery = {
    path: string[]
}

export type PostProps = {
    post: PostFieldsFragment
}

const Post = (props: PostProps) => {
    return <pre>Post Title: {props.post?.title}</pre>
}

export const getServerSideProps: GetServerSideProps<PostProps, PostQuery> = async (context) => {
    const client = getSdk(graphqlClient)
    const resp = await client.getPostByPath({ path: `/posts/${context.params?.path.join("/")}` })

    if (!resp.post) {
        return { notFound: true }
    }

    return {
        props: {
            post: resp.post
        },
    }
}

export default Post
