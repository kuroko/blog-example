import baseStyled, { ThemedStyledInterface } from "styled-components"

export const theme = {
  // Colours
  clrPrimaryL1: "#8C9EFF",
  clrPrimaryL2: "#536DFE",
  clrPrimaryL3: "#3D5AFE",
  clrPrimaryL4: "#304FFE",

  clrSecondaryL1: "#74cedd",
  clrSecondaryL2: "#027987",

  clrBackgroundL1: "#FFFFFF",
  clrBackgroundL2: "#F8F9FD",
  clrBackgroundL3: "#F3F4FA",
  clrBackgroundA1: "#E0EBF5",

  clrForegroundL0: "#1a1a1a",
  clrForegroundL1: "#3F4B63",
  clrForegroundL2: "#727E96",
  clrForegroundL3: "#ACB3C2",
  clrForegroundL4: "#E7E9ED",
  clrForegroundA1: "#2E3943",

  codeCyan: "hsl(198, 99%, 37%)",
  codeBlue: "hsl(221, 87%, 60%)",
  codePurple: "hsl(301, 63%, 40%)",
  codeGreen: "hsl(119, 34%, 47%)",
  codeOrange: "hsl(  5, 74%, 59%)",
  codeRed: "hsl(344, 84%, 43%)",
  codeBrown: "hsl(41, 99%, 30%)",
  codeYellow: "hsl(41, 99%, 38%)",

  codeMono1: "hsl(230, 8%, 24%)",
  codeMono2: "hsl(230, 6%, 44%)",
  codeMono3: "hsl(230, 4%, 64%)",

  // Fonts
  fontFamilyMono: `"Fira Mono", monospace`,
  fontFamilySerif: `ff-tisa-web-pro, serif`,

  // Size
  sizeInitial: 9,
  sizeBase: 10,
}

export type Theme = typeof theme

export const styled = baseStyled as ThemedStyledInterface<Theme>
