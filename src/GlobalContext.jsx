import React, { createContext, useState } from 'react'
import { toast } from 'sonner';

export const Context = createContext()

export default function Provider(props) {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [loginusername, setloginUsername] = useState('');
  if (token.length != 0) {
    localStorage.setItem("token", token);
  }
  const handleUnavailable = () => {
    toast.info('This feature is currently UnAvailable')
  }
  return (
    <Context.Provider value={{ isLoggedin, setIsLoggedin, token, setToken, handleUnavailable, loginusername, setloginUsername, name, setName }}>
      {props.children}
    </Context.Provider>
  )
}
