import React from 'react'
import WelcomePage from './components/WelcomePage'
import GlobalCSS from './GlobalCSS'
import '@radix-ui/themes/styles.css'
import MainSection from './components/MainSection'
import MidSection from '/src/pages/Home/MidSection'
import PostReplies from '/src/pages/Replies/PostReplies'
import Profile from '/src/pages/Profile/Profile'
import {
  BrowserRouter as Router,
  BrowserRouter,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import Provider from './GlobalContext'
import UserProfile from '/src/pages/Users/UserProfile.jsx'
import { Toaster } from 'sonner';
import Search from './pages/Search/Search'

export default function App() {
  return (
    <Provider>
      <Toaster position="top-center" richColors />
      <Routes>
        <Route path="/" element={<WelcomePage />}>
        </Route>
        <Route path="/main" element={<MainSection />}>
          <Route path="home" element={<MidSection />}></Route>
          <Route path="explore" element={<Search />}></Route>
          <Route path="replies" element={<PostReplies />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="user/:username" element={<UserProfile />}></Route>
        </Route>
      </Routes>

      <GlobalCSS />
    </Provider>
  )
}
