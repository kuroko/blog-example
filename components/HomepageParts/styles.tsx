import { desktop, paragraph, styled, tabletUp } from "styles"

export const Container = styled.div`
  p {
    ${paragraph};
  }
`

export const Wrapper = styled.div`
  max-width: 76rem;
  margin: 7vw 8vw;

  ${tabletUp} {
    margin: 7vw 10vw;
  }

  ${desktop} {
    margin: 86.2px auto;
  }
`
