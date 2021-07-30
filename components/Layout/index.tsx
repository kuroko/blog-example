import React, { PropsWithChildren } from "react"
import Head from "next/head"

import { Footer } from "components/Footer"
import { Navigation } from "components/Navigation"

export const Layout = ({ children }: PropsWithChildren<any>) => {
  return (
    <React.Fragment>
      <Navigation />
      {children}
      <Footer />
    </React.Fragment>
  )
}
