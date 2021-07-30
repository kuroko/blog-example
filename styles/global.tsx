import { createGlobalStyle } from "styled-components"
import { link, tabletUp } from "styles/mixins"
import { Theme } from "styles/theme"

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${props => props.theme.fontFamilySerif};
    font-size: ${props => props.theme.sizeInitial}px;

    // This is intentionally a specific pixel value.
    @media screen and (min-width: 351px) {
      font-size: ${props => props.theme.sizeBase}px;
    }
  }

  html {
    background: ${props => props.theme.clrBackgroundL2};
  }

  body {
    background: ${props => props.theme.clrBackgroundL1};
    color: ${props => props.theme.clrForegroundL1};
    font-size: 1.6rem;
    line-height: 1;
    text-rendering: optimizeLegibility;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.theme.clrForegroundL0};
    font-weight: 400;
    padding: 0;
  }

  h1 {
    font-size: 2.75rem;
    line-height: 1.2;

    ${tabletUp} {
      font-size: 4rem;
    }
  }

  h2 {
    font-size: 2.25rem;
    line-height: 1.25;

    ${tabletUp} {
      font-size: 3rem;
    }
  }

  h3 {
    font-size: 2.2rem;
    line-height: 1.25;

    ${tabletUp} {
      font-size: 2.6rem;
    }
  }

  h4 {
    font-size: 2rem;
    line-height: 1.6;

    ${tabletUp} {
      font-size: 2.2rem;
    }
  }

  h5 {
    font-size: 1.8rem;
    font-weight: bold;
    line-height: inherit;

    ${tabletUp} {
      font-size: 2rem;
    }
  }

  h6 {
    font-size: 1.6rem;
    font-weight: bold;
    line-height: inherit;

    ${tabletUp} {
      font-size: 1.8rem;
    }
  }

  a {
    ${link}
  }

  pre,
  code {
    font-family: ${props => props.theme.fontFamilyMono};
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.5;

    ${tabletUp} {
      font-size: 1.6rem;
    }
  }

  pre > code {
    font-size: 1.2rem;
    line-height: 1.5;

    ${tabletUp} {
      font-size: 1.4rem;
    }
  }

  hr {
    background: ${props => props.theme.clrForegroundL4};
    border: none;
    height: 1px;
    display: block;
    width: 100%;
  }
`
