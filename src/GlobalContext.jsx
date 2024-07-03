import React, { createContext, useState } from 'react'

export const Context = createContext()

export default function Provider(props) {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [token, setToken] = useState('');
  return (
    <Context.Provider value={{ isLoggedin, setIsLoggedin, token, setToken }}>
      {props.children}
    </Context.Provider>
  )
}
