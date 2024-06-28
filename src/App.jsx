import React, { useState, createContext } from 'react'
import WelcomePage from './Components/WelcomePage'
import GlobalCSS from './GlobalCSS'
import '@radix-ui/themes/styles.css'
import MainSection from './Components/MainSection'
import MidSection from '/src/Components/MidSection'
import PostReplies from '/src/Components/PostReplies'
import {
  BrowserRouter as Router,
  BrowserRouter,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";

export const Context = createContext();

export default function App() {
  const [isLoggedin, setIsLoggedin] = useState(true);
  return (
    <Context.Provider value={{ isLoggedin, setIsLoggedin }}>
        <Routes>
          <Route path="/access" element={<WelcomePage />}>
          </Route>
          <Route path="/main" element={<MainSection />}>
          </Route>
        </Routes>

        <GlobalCSS />
        {/* <WelcomePage /> */}
        {/* <MainSection/> */}
    </Context.Provider>
  )
}
