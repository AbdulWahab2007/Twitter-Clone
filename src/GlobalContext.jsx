import React, { createContext, useState } from 'react'

export const Context = createContext()

export default function Provider(props) {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [token, setToken] = useState('');
  if (token.length != 0) {
    localStorage.setItem("token", token);
  }
  const handleUnavailable = () => {
    alert("This feature is currently Unavailable :(")
  }
  return (
    <Context.Provider value={{ isLoggedin, setIsLoggedin, token, setToken, handleUnavailable }}>
      {props.children}
    </Context.Provider>
  )
}
