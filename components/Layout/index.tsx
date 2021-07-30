import React, { PropsWithChildren } from "react"

import { Footer } from "components/Footer"

export const Layout = ({ children }: PropsWithChildren<any>) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}
