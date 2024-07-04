import React from 'react'
import WelcomePage from './components/WelcomePage'
import GlobalCSS from './GlobalCSS'
import '@radix-ui/themes/styles.css'
import MainSection from './components/MainSection'
import MidSection from '/src/pages/Home/MidSection'
import PostReplies from '/src/pages/Replies/PostReplies'
import {
  BrowserRouter as Router,
  BrowserRouter,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import Provider from './GlobalContext'

export default function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<WelcomePage />}>
        </Route>
        <Route path="/main" element={<MainSection />}>
          <Route path="home" element={<MidSection />}></Route>
          <Route path="replies" element={<PostReplies />}></Route>
        </Route>
      </Routes>

      <GlobalCSS />
    </Provider>
  )
}
