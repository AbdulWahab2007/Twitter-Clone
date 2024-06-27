import React, { useState , useContext} from 'react';
import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import '@radix-ui/colors/black-alpha.css';
import '@radix-ui/colors/green.css';
import '@radix-ui/colors/mauve.css';
import '@radix-ui/colors/violet.css';
import * as styles from './Dialog'
import axios from 'axios';
import {Context} from '/src/App'


export default function SignUpButton() {

  const {isLoggedin , setIsLoggedin} = useContext(Context);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  const handlepost = async () => {
    console.log("Clicked!!!");
    const data = { username:name, email, password }
    console.log(data);
    const response = await axios.post("http://localhost:5000/api/user/signup", data)
    // const response = await fetch("http://localhost:5000/api/user/signup", {
    //   method: "POST",
    //   body: data
    // })

    console.log(response);
    if(response.status == 200){
      setIsLoggedin(true)
    }
    // const result = await response.json()
    // console.log(result);
   
  }


  return (
    
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <styles.Button $signUp>Creacte Account</styles.Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <styles.DialogOverlay className="DialogOverlay" />
        <styles.DialogContent className="DialogContent">
          <styles.Sign>
            <div className="TopBar">
              <img src='/src/Components/Icons/XLogo.png' />
            </div>
            <styles.SignUpContainer>
              <h1>Create your account</h1>
              <div className="InputHolder">
                <styles.Input value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder='' /><p className='placeholder'>Name</p>
              </div>
              <div className="InputHolder">
                <styles.Input value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder='' /><p className='placeholder'>Email</p>
              </div>
              <div className="InputHolder">
                <styles.Input value={password} onChange={(e) => { setPassword(e.target.value) }} type="text" placeholder='' /><p className='placeholder'>Password</p>
              </div>
              <div className="InputHolder">
                <styles.Input type="text" placeholder='' /><p className='placeholder'>Confirm Password</p>
              </div>
              <styles.Button $next onClick={handlepost}>Next</styles.Button>
            </styles.SignUpContainer>
          </styles.Sign>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </styles.DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
};