import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0px;
        height: 100vh;
        width: 100%;
    }
    .PopoverContent {
    display: flex;
    align-items: center;
    border-radius: 20px;
    padding: 20px 0px 20px 0px;
    width: 350px;
    height: 95px;
    background-color: white;
    box-shadow: 0px 0px 5px rgb(174, 174, 174);
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
  }

  .PopoverContent[data-state='open'][data-side='top'] {
    animation-name: slideDownAndFade;
  }

  .PopoverContent[data-state='open'][data-side='right'] {
    animation-name: slideLeftAndFade;
  }

  .PopoverContent[data-state='open'][data-side='bottom'] {
    animation-name: slideUpAndFade;
  }

  .PopoverContent[data-state='open'][data-side='left'] {
    animation-name: slideRightAndFade;
  }


  .optContainer {
    width: 100%;
  }

  .opt {
    height: 30px;
    font-size: 16px;
    margin: 5px 0px 5px 0px;
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
  }

  p {
    margin-left: 15px;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
  }

  .opt:hover {
    cursor: pointer;
    user-select: none;
    background-color: rgb(246, 246, 246);
  }

  @keyframes slideUpAndFade {
    from {
      opacity: 0;
      transform: translateY(2px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideRightAndFade {
    from {
      opacity: 0;
      transform: translateX(-2px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideDownAndFade {
    from {
      opacity: 0;
      transform: translateY(-2px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideLeftAndFade {
    from {
      opacity: 0;
      transform: translateX(2px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  } 
`;
export default GlobalStyle;
