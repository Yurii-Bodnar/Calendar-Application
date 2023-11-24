import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
     margin: 0px;
     padding: 0px;
    box-sizing: border-box;
    
  }
  ul, li, h1, h2, h3, h4, p, button, img  {
     padding: 0px;
     margin: 0px;
  cursor: default;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  p,h2{
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.00938em;
  }
  ul {
    list-style: none;
  }
  button{
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
  main{
    padding: 10px;
  }
`;

export default GlobalStyle;
