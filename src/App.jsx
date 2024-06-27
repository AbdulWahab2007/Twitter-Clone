import React, { useState, createContext } from 'react'
import WelcomePage from './Components/WelcomePage'
import GlobalCSS from './GlobalCSS'
import '@radix-ui/themes/styles.css'
import MainSection from './Components/MainSection'
import {
  BrowserRouter as Router,
  BrowserRouter,
  Route,
  Routes,
  Link,
} from "react-router-dom";

export const Context = createContext();

export default function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  console.log(isLoggedin);
  return (
    <Context.Provider value={{ isLoggedin, setIsLoggedin }}>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<WelcomePage />}>
          </Route>
          <Route path="/home" element={<MainSection />}>
          </Route>
        </Routes>

        <GlobalCSS />
        {/* <WelcomePage /> */}
        {/* <MainSection/> */}
      </BrowserRouter>
    </Context.Provider>
  )
}
