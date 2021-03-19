import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #F4F8FA;
    font-family: 'Work Sans', sans-serif;
  }
  
  button {
    cursor: pointer;
  }
`;
