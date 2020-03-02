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


[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-envelop:before {
  content: "\\e945";
}
.icon-embed2:before {
  content: "\\ea80";
}
.icon-facebook:before {
  content: "\\ea90";
}
.icon-facebook2:before {
  content: "\\ea91";
}
.icon-instagram:before {
  content: "\\ea92";
}
.icon-twitter:before {
  content: "\\ea96";
}
.icon-github:before {
  content: "\\eab0";
}
.icon-skype:before {
  content: "\\eac5";
}
.icon-linkedin:before {
  content: "\\eac9";
}
.icon-linkedin2:before {
  content: "\\eaca";
}

  `
