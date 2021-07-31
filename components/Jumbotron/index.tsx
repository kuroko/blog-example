import React from "react"
import { Bar, Container, Description, Title, Wrapper } from "components/Jumbotron/styles"

export type JumbotronProps = {
  title?: string
  description?: string
  isMasthead?: boolean
}

export const Jumbotron = ({ title, description, isMasthead }: JumbotronProps) => {
  return (
    <Container>
      <Wrapper>
        {title && (
          <Title>{title}</Title>
        )}

        {description && (
          <Description>{description}</Description>
        )}

        {isMasthead && (
          <Bar />
        )}
      </Wrapper>
    </Container>
  )
}
