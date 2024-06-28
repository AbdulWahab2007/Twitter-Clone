import React , {useContext} from 'react'
import styled from 'styled-components'
import SideBar from './SideBar'
import MidSection from './MidSection'
import RightBar from './RightBar'
import PostReplies from './PostReplies'
import {Context} from '/src/App'
import {
    BrowserRouter as Router,
    BrowserRouter,
    Route,
    Routes,
    Link,
    Navigate,
} from "react-router-dom";

export default function MainSection() {
    const {isLoggedin , setIsLoggedin} = useContext(Context);

    if(!isLoggedin){
       return <Navigate to="/access"/>;
    }

    return (
        <>
            <Main>
                <SideBar />
                <Routes>
                    <Route path="/tweets" element={<MidSection />}>
                    </Route>
                    <Route path="/replies" element={<PostReplies />}>
                    </Route>
                </Routes>
                <RightBar />
            </Main>
        </>
    )
}

const Main = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`