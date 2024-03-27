import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`

  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
    min-height: 100%;
    font-family: url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
    background-color: ${theme.colors.grey4};
  }

  button{
    cursor: pointer;
    border: none;
    background: transparent;
  }

  a{
    color: unset;
    text-decoration: none;
  }

  ul, ol, li{
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6, p, a, span, li, button, input, textarea{
    font-family: 'Inter', sans-serif;
  }

   /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background-color: ${theme.colors.grey3};
    margin: 1rem;
    border-radius: 1.6rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.grey3};
    border-radius: 1.6rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${theme.colors.primary};
  }

  .modalOverlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modalContent {
    width: 90%;
    max-width: 370px;
    margin: 0 auto;
    border-radius: 4px;
    background-color: ${theme.colors.grey3};
    color: ${theme.colors.grey1};
    border-radius: 4px;
  }

  .ButtonCloseModal {
    
    padding: 5px;
    color: ${theme.colors.grey1};
    font-size: ${theme.typography.headlineBold.size};
    font-weight: ${theme.typography.headlineBold.weight};
    line-height: ${theme.typography.headlineBold.height};
  }
  
  .modalTechTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px;
    height: 50px;
    border-radius: 4px 4px 0 0;
    background: ${theme.colors.grey2};
    color: ${theme.colors.grey0};
    font-size: 10px;
    /* font-size: ${theme.typography.headline.weight}; */
    font-weight: ${theme.typography.headline.weight};
    line-height: ${theme.typography.headline.height};
  }

`;
