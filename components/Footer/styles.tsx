import styled from "styled-components"
import { desktop, tabletUp } from "styles"

export const Container = styled.footer`
  background-color: ${props => props.theme.clrBackgroundL2};
`

export const Wrapper = styled.div`
  max-width: 76rem;
  margin: 0 8vw;
  padding: 3rem 0;
  
  ${tabletUp} {
    margin: 0 10vw;
  }
  
  ${desktop} {
    margin: 0 auto;
  }
`

export const Copyright = styled.div`
  color: ${props => props.theme.clrForegroundL2};
  font-style: italic;
  font-size: 1.4rem;

  em {
    color: ${props => props.theme.clrForegroundL0};
  }
`
