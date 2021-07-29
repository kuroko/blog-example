import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  UUID: any;
};

export type Category = {
  __typename?: 'Category';
  _metadata?: Maybe<K4oEntryMetadata>;
  title: Scalars['String'];
  description: Scalars['String'];
};


export type Entry = Category | Homepage | Person | Post | Tag;

export type Homepage = {
  __typename?: 'Homepage';
  _metadata?: Maybe<K4oEntryMetadata>;
  intro: Scalars['String'];
  parts: Array<Maybe<Homepage_Parts>>;
};

export type Homepage_Parts = Homepage_Parts_PostsListSection | Homepage_Parts_TextSection;

export type Homepage_Parts_PostsListSection = {
  __typename?: 'Homepage_Parts_PostsListSection';
  _metadata?: Maybe<K4oEntryMetadata>;
  title: Scalars['String'];
};

export type Homepage_Parts_TextSection = {
  __typename?: 'Homepage_Parts_TextSection';
  _metadata?: Maybe<K4oEntryMetadata>;
  title: Scalars['String'];
  text: Scalars['String'];
};

export type K4oAsset = {
  __typename?: 'K4oAsset';
  assetUuid: Scalars['UUID'];
  path: Scalars['String'];
  name: Scalars['String'];
  filePath: Scalars['String'];
  mimeType: Scalars['String'];
  publicUrl: Scalars['String'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
};

export type K4oEntriesFilters = {
  entryUuid?: Maybe<K4oUuidFilters>;
  contentTypeUuid?: Maybe<K4oUuidFilters>;
  contentType?: Maybe<K4oStringFilters>;
  path?: Maybe<K4oPathFilters>;
  name?: Maybe<K4oStringFilters>;
  relations?: Maybe<K4oEntriesRelationsFilters>;
  createdAt?: Maybe<K4oTimeFilters>;
  updatedAt?: Maybe<K4oTimeFilters>;
  and?: Maybe<Array<K4oEntriesFilters>>;
  or?: Maybe<Array<K4oEntriesFilters>>;
};

export type K4oEntriesOrder = {
  field?: Maybe<K4oEntriesOrderField>;
  direction?: Maybe<K4oOrderDirection>;
};

export enum K4oEntriesOrderField {
  Path = 'PATH',
  Name = 'NAME',
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

export type K4oEntriesRelationsFilters = {
  contains?: Maybe<K4oEntriesRelationsFiltersContains>;
};

export type K4oEntriesRelationsFiltersContains = {
  field?: Maybe<Scalars['String']>;
  path: Scalars['String'];
};

export type K4oEntryMetadata = {
  __typename?: 'K4oEntryMetadata';
  entryUuid: Scalars['UUID'];
  contentTypeUuid: Scalars['UUID'];
  path: Scalars['String'];
  name: Scalars['String'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
};

export enum K4oOrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type K4oPathFilters = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  childrenOf?: Maybe<Scalars['String']>;
  descendantsOf?: Maybe<Scalars['String']>;
};

export type K4oStringFilters = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
};

export type K4oTimeFilters = {
  dateEq?: Maybe<Scalars['Date']>;
  dateNe?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
};

export type K4oUuidFilters = {
  eq?: Maybe<Scalars['UUID']>;
  ne?: Maybe<Scalars['UUID']>;
};

export type Person = {
  __typename?: 'Person';
  _metadata?: Maybe<K4oEntryMetadata>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  bio: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  _metadata?: Maybe<K4oEntryMetadata>;
  coverImage: K4oAsset;
  title: Scalars['String'];
  category: Post_Category;
  authors: Array<Maybe<Post_Authors>>;
  content: Array<Maybe<Post_Content>>;
  tags: Array<Maybe<Post_Tags>>;
};

export type Post_Authors = Person;

export type Post_Category = Category;

export type Post_Content = Post_Content_MarkdownSection | Post_Content_GallerySection;

export type Post_Content_GallerySection = {
  __typename?: 'Post_Content_GallerySection';
  _metadata?: Maybe<K4oEntryMetadata>;
  items: Array<Maybe<Post_Content_GallerySection_Items>>;
};

export type Post_Content_GallerySection_Items = {
  __typename?: 'Post_Content_GallerySection_Items';
  image: K4oAsset;
  caption: Scalars['String'];
};

export type Post_Content_MarkdownSection = {
  __typename?: 'Post_Content_MarkdownSection';
  _metadata?: Maybe<K4oEntryMetadata>;
  markdown: Scalars['String'];
};

export type Post_Tags = Tag;

export type Query = {
  __typename?: 'Query';
  entries: Array<Entry>;
  category?: Maybe<Category>;
  homepage?: Maybe<Homepage>;
  person?: Maybe<Person>;
  post?: Maybe<Post>;
  tag?: Maybe<Tag>;
};


export type QueryEntriesArgs = {
  filters?: Maybe<K4oEntriesFilters>;
  orderBy?: Maybe<Array<K4oEntriesOrder>>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};


export type QueryCategoryArgs = {
  path: Scalars['String'];
};


export type QueryHomepageArgs = {
  path: Scalars['String'];
};


export type QueryPersonArgs = {
  path: Scalars['String'];
};


export type QueryPostArgs = {
  path: Scalars['String'];
};


export type QueryTagArgs = {
  path: Scalars['String'];
};

export type Tag = {
  __typename?: 'Tag';
  _metadata?: Maybe<K4oEntryMetadata>;
  name: Scalars['String'];
};


export type PostFieldsFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'title'>
  & { coverImage: (
    { __typename?: 'K4oAsset' }
    & Pick<K4oAsset, 'publicUrl'>
  ), content: Array<Maybe<(
    { __typename: 'Post_Content_MarkdownSection' }
    & Pick<Post_Content_MarkdownSection, 'markdown'>
  ) | (
    { __typename: 'Post_Content_GallerySection' }
    & { items: Array<Maybe<(
      { __typename?: 'Post_Content_GallerySection_Items' }
      & Pick<Post_Content_GallerySection_Items, 'caption'>
      & { image: (
        { __typename?: 'K4oAsset' }
        & Pick<K4oAsset, 'publicUrl'>
      ) }
    )>> }
  )>> }
);

export type GetPostByPathQueryVariables = Exact<{
  path: Scalars['String'];
}>;


export type GetPostByPathQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & PostFieldsFragment
  )> }
);

export const PostFieldsFragmentDoc = gql`
    fragment PostFields on Post {
  coverImage {
    publicUrl
  }
  title
  content {
    __typename
    ... on Post_Content_MarkdownSection {
      markdown
    }
    ... on Post_Content_GallerySection {
      items {
        image {
          publicUrl
        }
        caption
      }
    }
  }
}
    `;
export const GetPostByPathDocument = gql`
    query getPostByPath($path: String!) {
  post(path: $path) {
    ...PostFields
  }
}
    ${PostFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getPostByPath(variables: GetPostByPathQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPostByPathQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPostByPathQuery>(GetPostByPathDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPostByPath');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;