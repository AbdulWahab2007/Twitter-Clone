import React from 'react'
import WelcomePage from './Components/WelcomePage'
import GlobalCSS from './GlobalCSS'
import '@radix-ui/themes/styles.css'
import MainSection from './Components/MainSection'

export default function App() {
  return (
    <>
    <GlobalCSS/>
    <WelcomePage/>
    {/* <MainSection/> */}
    </>
  )
}
