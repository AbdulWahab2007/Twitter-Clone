import styled from 'styled-components'

export const DialogOverlay = styled.div`
    background-color: var(--black-a9);
    position: fixed;
    inset: 0;
    animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

    @keyframes overlayShow {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
`

export const DialogContent = styled.div`
    background-color: white;
    border-radius: 6px;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    max-width: 450px;
    max-height: 85vh;
    padding: 25px;
    animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
    &:focus{
      outline: none;
    }
    .IconButton{
      all: unset;
      font-family: inherit;
      border-radius: 100%;
      height: 25px;
      width: 25px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 20px;
      left: 10px;
        &:hover{
          background-color: #c8c8c8;
      }
        &:focus{
          box-shadow: 0 0 0 2px #7e7e7e;
      }
    }

    @keyframes contentShow {
    from {
        opacity: 0;
        transform: translate(-50%, -48%) scale(0.96);
    }

    to {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
}
`

export const Sign = styled.div`
  display: flex;
  height: 650px;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  .TopBar{
    margin-top: -20px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  img{
    margin-top: 15px;
    width: 35px;
    height: 35px;
  }
`

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    h1{
      margin: 27px 0px 17px 0px;
      font-family: "Roboto Slab", serif;
      font-optical-sizing: auto;
      font-weight: 700;
      font-style: normal;
    }
    h5{
      margin: 22px 0px 12px 0px;
      font-size: 18px;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    }
    p{
      margin: 0px;
      color: #a5a5a5;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    }
    .InputHolder{
        display: flex;
        flex-direction: row;
    }
    .placeholder{
        user-select: none;
        pointer-events: none;
        color: #666;
        position: absolute;
        margin: 37px;
        margin-left: 10px;
        font-size: 20px;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
        background-color: white;
        transition: all 0.1s;
    }
`

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 650px;
    width: 70%;
    h1{
      margin: -150px 0px 50px 0px;
      font-family: "Roboto Slab", serif;
      font-optical-sizing: auto;
      font-weight: 700;
      font-style: normal;
    }
    .InputHolder{
        display: flex;
        flex-direction: row;
    }
    .placeholder{
        user-select: none;
        pointer-events: none;
        color: #666;
        position: absolute;
        margin: 37px;
        margin-left: 10px;
        font-size: 20px;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
        background-color: white;
        transition: all 0.1s;
    }
`

export const Input = styled.input`
      all: unset;
      color-scheme: ${props => props.$date ? "dark" : "light"};
      background-color: ${props => props.$date ? "#61c0ff" : "white"};
      color: ${props => props.$date ? "white" : "black"};
      width: 90%;
      height: 60px;
      margin: 17px 0px 17px 0px;
      font-size: 20px;
      padding-left: 10px;
      border-radius: 5px;
      border: ${props => props.$date ? "none" : "1px solid #a5a5a5"};
      padding-right: 10px;
      font-family: "Roboto Slab", serif;
      font-optical-sizing: auto;
      font-weight: 500;
      font-style: normal;
      &:focus{
        border: 2px solid #1D9BF0;
      }
      &:focus + .placeholder{
        color: #1D9BF0;
        font-size: 15px;
        margin-top: 6px;
        padding: 3px;
      }
      
`


export const Button = styled.div`
all: unset;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: ${props => props.$next ? "55px" : "35px"};
border-radius: 100px;
border: ${props => props.$next ? "none" : props.$signUp ? "none" : "1px solid #a5a5a5"};
margin: 5px;
margin-top: ${props => props.$next ? "60px" : props.$SignInNext ? "25px" : "5px"};
margin-left: 0px;
background-color: ${props => props.$next ? "#7e7e7e" : props.$SignInNext ? "black" : props.$signUp ? "#1D9BF0" : "white"};
color: ${props => props.$next ? "white" : props.$SignInNext ? "white" : props.$signUp ? "white" : props.$signIn ? "#1D9BF0" : "black"};
font-size: 20px;
font-family: "Bebas Neue", sans-serif;
font-weight: 400;
font-style: normal;
.Logo{
    width: 15px;
    height: 17px;
    margin-bottom: ${props => props.$normal ? "17px" : "0px"};
    margin-right: 8px;
  }
&:hover{
  cursor: pointer;
  background-color: ${props => props.$signUp ? "#0f89da" : props.$SignInNext ? "#242424" : props.$next ? "#979797" : props.$signIn ? "#e5eff5" : "#eaeaea"};
}
`