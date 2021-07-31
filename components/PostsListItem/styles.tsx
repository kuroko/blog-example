import { clearfix, phabletUp, styled, tabletUp } from "styles"

export const Item = styled.article`
  ${clearfix};

  font-size: 1.6rem;
  line-height: 2.4rem;
  margin: 0 0 2rem;
  position: relative;

  ${phabletUp} {
    font-size: 1.8rem;
    line-height: 2.7rem;
  }

  ${tabletUp} {
    margin: 0 0 1rem;
  }

  time {
    display: block;
    color: ${props => props.theme.clrForegroundL2};
    font-size: 1.3rem;
    line-height: 2.4rem;
    margin-right: 2rem;

    ${phabletUp} {
      font-size: 1.4rem;
      line-height: 2.7rem;
    }

    ${tabletUp} {
      float: right;
      margin-left: 2rem;
      margin-right: 0;
    }
  }
`
