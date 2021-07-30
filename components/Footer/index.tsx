import React from "react"

import { Container, Copyright, Wrapper } from "components/Footer/styles"

// TODO: Grab data from some config?
export const Footer = () => {
  return <Container>
    <Wrapper>
      <Copyright>
        &copy; {new Date().getFullYear()}, <em>Kuroko LTD</em>
      </Copyright>
    </Wrapper>
  </Container>
}
