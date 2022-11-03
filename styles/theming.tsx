import { createGlobalStyle } from "styled-components";

export const defaultTheme = {
  white_text: "#fff",
  white_back: "#fff",
  blue_hover_text: "#5887e3",
  blue_back: "#5887e3",
  blue_text: "#5887e3",
  nav_shadow: "#00000003",
  nav_text_hover: "#5887e3",
  footer_back: "#f9f9fc",
  footer_link_text: "#666",
  nav_back: "#1e1e1e",
  nav_border: "#e7e7e7",
  lang_back: "#ffffff0d",
  lang_border: "#ffffff80",
  back_fa: "#fafafa",
  back_f6: "#f6f6f6",
};

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: PingFangSC-Regular, sans-serif;
    width: 100%;
    height: 100%;  
    min-width: 1200px;  
  }
  @font-face {
    font-family: "iconfont";
    /* project id 773130 */
    src: url("//at.alicdn.com/t/font_773130_uo0ypcf2m6s.eot");
    src: url("//at.alicdn.com/t/font_773130_uo0ypcf2m6s.eot?#iefix") format("embedded-opentype"), url("//at.alicdn.com/t/font_773130_uo0ypcf2m6s.woff") format("woff"), url("//at.alicdn.com/t/font_773130_uo0ypcf2m6s.ttf") format("truetype"), url("//at.alicdn.com/t/font_773130_uo0ypcf2m6s.svg#iconfont") format("svg");
  }
  #__next {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    overflow: hidden;
  }
  * {
    box-sizing: border-box;
  }
  @media (max-width: 768px) {
    html, body {
      min-width: 100%; 
    }
  }
`;
