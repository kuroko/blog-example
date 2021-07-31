import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    // Colours
    clrPrimaryL1: string
    clrPrimaryL2: string
    clrPrimaryL3: string
    clrPrimaryL4: string

    clrSecondaryL1: string
    clrSecondaryL2: string

    clrBackgroundL1: string
    clrBackgroundL2: string
    clrBackgroundL3: string
    clrBackgroundA1: string

    clrForegroundL0: string
    clrForegroundL1: string
    clrForegroundL2: string
    clrForegroundL3: string
    clrForegroundL4: string
    clrForegroundA1: string

    codeCyan: string
    codeBlue: string
    codePurple: string
    codeGreen: string
    codeOrange: string
    codeRed: string
    codeBrown: string
    codeYellow: string

    codeMono1: string
    codeMono2: string
    codeMono3: string

    // Fonts
    fontFamilyMono: string
    fontFamilySerif: string

    // Size
    sizeInitial: number
    sizeBase: number
  }
}
