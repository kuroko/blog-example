import React from "react"
import Link from "next/link"

import { Container, Links, Logo, Wrapper } from "components/Navigation/styles"

export const Navigation = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Link href="/">Blog Example</Link>
        </Logo>

        <Links>
          <ul role="menu">
            <li role="menuitem">
              <a href="https://github.com/kuroko" rel="noreferrer" target="_blank">GitHub</a>
            </li>
            <li role="menuitem">
              <a href="https://www.kurokocms.com" rel="noreferrer" target="_blank">Web</a>
            </li>
          </ul>
        </Links>
      </Wrapper>
    </Container>
  )
}
