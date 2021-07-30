import { css } from "styled-components"
import { theme } from "styles/theme"

const phabletWidth = 41 * theme.sizeBase
const tabletWidth = 76.8 * theme.sizeBase
const postTabletWidth = tabletWidth + (10 * theme.sizeBase)
const desktopWidth = 102.4 * theme.sizeBase

export const mobile = `@media screen and (max-width: ${phabletWidth - 1}px)`
export const phablet = `@media screen and (min-width: ${phabletWidth}px) and (max-width: ${tabletWidth - 1}px)`
export const phabletUp = `@media screen and (min-width: ${phabletWidth}px)`
export const tablet = `@media screen and (min-width: ${tabletWidth}px) and (max-width: ${desktopWidth - 1}px)`
export const tabletUp = `@media screen and (min-width: ${tabletWidth}px)`
export const postTabletUp = `@media screen and (min-width: ${postTabletWidth}px)`
export const desktop = `@media screen and (min-width: ${desktopWidth}px)`

export const clearfix = css`
  &::after {
    clear: both;
    content: "";
    display: block;
  }
`

export const link = css`
  color: ${theme.clrPrimaryL4};
  text-decoration: none;
  text-decoration-color: ${theme.clrPrimaryL4};
  text-decoration-skip-ink: auto;

  &:hover {
    text-decoration: underline;
  }
`

export const paragraph = css`
  font-size: 1.6rem;
  line-height: 1.7;

  ${tabletUp} {
    font-size: 1.8rem;
  }
`

export const subdued = css`
  font-size: 1.4rem;
  font-style: italic;
`
