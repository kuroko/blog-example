import { desktop, phabletUp, styled, tabletUp } from "styles"
import { css } from "styled-components"

export type ContainerProps = {
  isMasthead?: boolean
}

export const Container = styled.header<ContainerProps>`
  background: ${props => props.theme.clrBackgroundA1};
  overflow: hidden;
  position: relative;

  ${props => props.isMasthead && css`
    ${Title} {
      font-size: 3rem;

      ${tabletUp} {
        font-size: 4rem;
      }
    }

    ${Description} {
      font-size: 2.2rem;

      ${phabletUp} {
        font-size: 2.4rem;
      }

      ${tabletUp} {
        font-size: 3rem;
      }
    }
  `}
`

export const Wrapper = styled.div`
  max-width: 76rem;
  margin: 10vw 8vw;
  position: relative;

  ${tabletUp} {
    margin: 10vw 10vw;
  }

  ${desktop} {
    margin: 103px auto;
  }
`

export const Title = styled.h1`
  color: ${props => props.theme.clrForegroundL0};
  font-size: 2.7rem;
  margin: 0;
  margin-top: 2rem;
  max-width: 66rem;

  ${tabletUp} {
    font-size: 3.6rem;
  }
`

export const Description = styled.h2`
  color: ${props => props.theme.clrForegroundA1};
  font-size: 2rem;
  line-height: 1.67;
  margin: 0;
  margin-top: 2rem;
  max-width: 66rem;
  text-align: left;
  position: relative;
  z-index: 2;

  ${phabletUp} {
    font-size: 2.2rem;
  }

  ${tabletUp} {
    font-size: 2.7rem;
    padding-right: 10rem;
  }
`

export const Bar = styled.div`
  background: ${props => props.theme.clrForegroundL3};
  height: 2px;
  margin-top: 3rem;
  width: 50px;
`
