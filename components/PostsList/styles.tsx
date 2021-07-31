import { Item } from "components/PostsListItem/styles"
import { desktop, link, styled, tabletUp } from "styles"

export const Container = styled.section`
  max-width: 66rem;
  margin: 7% 8%;

  &::before,
  &::after {
    content: " ";
    display: block;
    height: 7%;
    max-height: 86.2px;
    width: 100%;
  }

  ${tabletUp} {
    margin: 7% 10%;
    max-width: 76rem;
  }

  ${desktop} {
    margin: 86.2px auto;
  }

  a {
    &:hover {
      text-decoration: none;
    }

    ${Item}:hover {
      span {
        text-decoration: underline;
        text-decoration-skip-ink: auto;
      }
    }
  }
`

export const Title = styled.h4`
  margin-top: 0;

  a {
    ${link};
  }
`
