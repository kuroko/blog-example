import { clearfix, desktop, phabletUp, postTabletUp, styled, tabletUp } from "styles"

export const Container = styled.header`
  position: relative;
  margin: 7vw 8vw 0;
  text-align: left;

  ${tabletUp} {
    margin: 7vw 10vw 0;
  }

  ${postTabletUp} {
    margin: 7vw 10vw 0;
  }

  ${desktop} {
    max-width: 76rem;
    margin: 86.2px auto 0;
  }
`

export const Title = styled.h1`
  margin-bottom: 0;
  margin-top: 0;
  position: relative;
  z-index: 2;
  font-size: 2.75rem;

  ${phabletUp} {
    font-size: 3.5rem;
  }

  ${tabletUp} {
    font-size: 4.5rem;
  }
`

export const Meta = styled.div`
  ${clearfix};

  color: ${props => props.theme.clrForegroundL2};
  font-size: 1.4rem;
  line-height: 1.7;
  margin: 1.7rem 0 0;
  position: relative;
  z-index: 2;
`

export const MetaItem = styled.div`
  display: inline-block;
  white-space: nowrap;
  
  &:not(:last-child) {
    margin-right: 2rem;
    position: relative;
  }
  
  &:not(:last-child)::after {
    content: "/";
    position: absolute;
    right: -1.3rem;
    top: 0;
    bottom: 0;
  }
`

export const FeatureImage = styled.div`
  margin: 7vw 8vw;
  position: relative;

  @media screen and (min-width: ${props => 70 * props.theme.sizeBase}px) {
    margin-top: 8rem;
  }

  ${tabletUp} {
    max-width: 108rem;
    margin: 7vw 0;
    padding: 0 60px;
  }

  ${desktop} {
    margin: 103px auto;
  }

  img {
    width: 100%;
    max-width: 96rem;
    border-radius: 3px;
  }
`
