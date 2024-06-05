import React from 'react'
import styled from 'styled-components'
import SideBar from './SideBar'
import MidSection from './MidSection'
import RightBar from './RightBar'
import PostReplies from './PostReplies'

export default function MainSection() {
    return (
        <>
            <Main>
                <SideBar />
                {/* <MidSection /> */}
                <PostReplies/>
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