import React from "react"
import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"

import { Layout } from "components/Layout"
import { GlobalStyles, theme } from "styles"

export default function BlogApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
