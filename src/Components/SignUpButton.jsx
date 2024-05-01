import React from 'react';
import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import './styles.css';

const SignUpButton = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button violet">Creacte Account</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">

        <SignUp>
          <div className="CancelHolder">
            <img src='./XLogo.png' />
          </div>
          <SignUpContainer>
            <h1>Create your account</h1>
            <Input type="text" placeholder='Name' />
            <Input type="text" placeholder='Email' />
            <h5>Date of birth</h5>
            <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
            <Input $date type="date" />
            <Button $next>Next</Button>
          </SignUpContainer>
        </SignUp>



        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

const SignUp = styled.div`
  display: flex;
  background-color: aqua;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background-color: white;
  .CancelHolder{
    margin-top: -20px;
    display: flex;
    width: 100%;
  }
  .cancelIcon{
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-left: 10px;
    width: 40px;
    height: 40px;
    &:hover{
      background-color: #e8e8e8;
    }
  }
  img{
    margin-top: 15px;
    margin-left: 215px;
    width: 35px;
    height: 35px;
  }
`

const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 3px;
    width: 80%;
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
`

const Input = styled.input`
      color-scheme: ${props => props.$date ? "dark" : "light"};
      background-color: ${props => props.$date ? "#61c0ff" : "white"};
      color: ${props => props.$date ? "white" : "black"};
      width: 90%;
      height: 50px;
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
        border: 3px solid #1D9BF0;
      }
`


const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props => props.$next ? "55px" : "35px"};
  border-radius: 100px;
  border: ${props => props.$second ? "none" : props.$next ? "none" : "1px solid #a5a5a5"};
  margin: 5px;
  margin-top: ${props => props.$next ? "80px" : "5px"};
  margin-left: 0px;
  background-color: ${props => props.$second ? "#1D9BF0" : props.$next ? "#7e7e7e" : "white"};
  color: ${props => props.$second ? "white" : props.$third ? "#1D9BF0" : props.$next ? "white" : "black"};
  font-size: 20px;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
  img{
    width: 15px;
    height: 17px;
    margin-right: 8px;
  }
  &:hover{
    cursor: pointer;
    background-color: ${props => props.$second ? "#0f89da" : props.$third ? "#e5eff5" : "#eaeaea"};
  }
`

export default SignUpButton;