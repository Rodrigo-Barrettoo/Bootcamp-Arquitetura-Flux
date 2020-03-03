import { createGlobalStyle } from 'styled-components';

// import background from '../assets/images/background.svg';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
/* 141419 191920*/
  body {
    background: #191920;
    position: relative;
    -webkit-font-smoothing: antialiased;
  }

  body:before {
    content: '';
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 400px;
    background: #141419;
    clip-path: polygon(0 0, 0 100%, 250% 0);
    z-index: -1;
  }

  body, input, button {
    font: 14px;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }
`;
