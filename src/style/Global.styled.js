import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

   * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
   }
   body {
        font-family: Arial, Helvetica, sans-serif;
   }
   p{
     line-height: 1.7;
     font-size: 1rem;
   }
   *::-webkit-scrollbar {
     width: 7px;
   }
  /* Track */
   *::-webkit-scrollbar-track {
     background:  #fff; 
     border-radius: 20px;
   }
 /* Handle */
   *::-webkit-scrollbar-thumb {
     background: #055; 
     border-radius: 20px;
   }
 /* Handle on hover */
   *::-webkit-scrollbar-thumb:hover {
     background: #033; 
} 
`;

export default GlobalStyle;
