import React, { useState, useContext } from 'react';
import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import '@radix-ui/colors/black-alpha.css';
import '@radix-ui/colors/green.css';
import '@radix-ui/colors/mauve.css';
import '@radix-ui/colors/violet.css';
import * as styles from './Dialog'
import { HRcontainer } from './WelcomePage'
import axios from 'axios';
import { Context } from '/src/App'

export default function SignInButton() {
    const { isLoggedin, setIsLoggedin } = useContext(Context);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handlesignin = async () => {
        console.log("Clicked!!!");
        const data = { username, password }
        console.log(data);
        const response = await axios.post("http://localhost:5000/api/user/login", data)
        console.log(response);
        if (response.status == 200) {
            setIsLoggedin(true)
        }
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <styles.Button $signIn>Sign In</styles.Button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <styles.DialogOverlay className="DialogOverlay" />
                <styles.DialogContent className="DialogContent">

                    <styles.Sign>
                        <div className="TopBar">
                            <img src='/src/Components/Icons/XLogo.png' />
                        </div>
                        <styles.SignInContainer>
                            <h1>Sign in to X</h1>
                            <styles.Button $normal><img className='Logo' src='https://seeklogo.com/images/G/google-logo-28FA7991AF-seeklogo.com.png' />Signup with Google</styles.Button>
                            <styles.Button $normal><img className='Logo' src='https://seeklogo.com/images/A/apple-logo-E3DBF3AE34-seeklogo.com.png' />Signup with Apple</styles.Button>
                            <HRcontainer>
                                <hr />
                                <p>or</p>
                                <hr />
                            </HRcontainer>
                            <div className="InputHolder">
                                <styles.Input value={username} onChange={(e) => { setUsername(e.target.value) }} type="text" placeholder='' /><p className='placeholder'>Username</p>
                            </div>
                            <div className="InputHolder">
                                <styles.Input value={password} onChange={(e) => { setPassword(e.target.value) }} type="text" placeholder='' /><p className='placeholder'>Password</p>
                            </div>
                            <styles.Button $SignInNext onClick={handlesignin}>Next</styles.Button>
                        </styles.SignInContainer>
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