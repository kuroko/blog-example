import type { AppProps } from "next/app"

import { Layout } from "components/Layout"

export default function BlogApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
