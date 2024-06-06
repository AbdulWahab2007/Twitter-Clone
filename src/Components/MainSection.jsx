import React from 'react'
import styled from 'styled-components'
import SideBar from './SideBar'
import MidSection from './MidSection'
import RightBar from './RightBar'
import PostReplies from './PostReplies'
import {
    BrowserRouter as Router,
    BrowserRouter,
    Route,
    Routes,
    Link,
} from "react-router-dom";

export default function MainSection() {
    return (
        <>
            <BrowserRouter>
                <Main>
                    <SideBar />
                    <Routes>
                        <Route path="/" element={<MidSection />}>
                        </Route>
                        <Route path="/replies" element={<PostReplies />}>
                        </Route>
                        {/* <MidSection /> */}
                        {/* <PostReplies /> */}
                    </Routes>
                    <RightBar />
                </Main>
            </BrowserRouter>
        </>
    )
}

const Main = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`