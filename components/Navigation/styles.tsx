import styled from "styled-components"
import { desktop, tabletUp } from "styles"

export const Container = styled.div`
  background: ${props => props.theme.clrBackgroundA1};
  height: 6rem;
  line-height: 6rem;
  font-size: 1.6rem;
  position: relative;
  z-index: 3;
`

export const Wrapper = styled.div`
  display: flex;
  margin: 0 8vw;

  ${tabletUp} {
    margin: 0 10vw;
  }

  ${desktop} {
    margin: 0 auto;
    max-width: 76rem;
  }
`

export const Logo = styled.div`
  flex-grow: 1;
  
  a {
    color: ${props => props.theme.clrForegroundA1};
  }
`

export const Links = styled.div`
  ul,
  ol {
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
    margin-left: ${props => props.theme.sizeBase}px;
  }
`
