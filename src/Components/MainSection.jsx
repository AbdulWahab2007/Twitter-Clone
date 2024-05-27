import React from 'react'
import styled from 'styled-components'
import SideBar from './SideBar'

export default function MainSection() {
    return (
        <>
            <Main>
                <SideBar />
            </Main>
        </>
    )
}

const Main = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`