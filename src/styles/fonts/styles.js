import { createGlobalStyle } from "styled-components"
import fontFiles from "./fonts"

export const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'icomoon';
  src:  url(${fontFiles.IconmoonEOT});
  src:  url(${fontFiles.IconmoonEOT}) format('embedded-opentype'),
    url(${fontFiles.IconmoonTTF}) format('truetype'),
    url(${fontFiles.IconmoonWOFF}) format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
  `
