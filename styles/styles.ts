import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
   font-family: Poppins;
  },
  html {
  scroll-behavior: smooth;
 },
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    background-color: rgb(9, 9, 12);
  } 
`;