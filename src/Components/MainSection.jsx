import React from 'react'
import styled from 'styled-components'
import { Button } from './Dialog'

export default function MainSection() {
    return (
        <>
            <Main>
                <SideBar>
                    <Anchor><img className='XLogo' src="./XLogo.png" alt="" /></Anchor>
                    <Anchor><a><img src='./public/Home.svg' alt="" />Home</a></Anchor>
                    <Anchor><a><img src='./public/Explore.svg' alt="" />Explore</a></Anchor>
                    <Anchor><a><img src='./public/Notifications.svg' alt="" />Notifications</a></Anchor>
                    <Anchor><a><img src='./public/Messages.svg' alt="" />Messages</a></Anchor>
                    <Anchor><a><img src='./public/Grok.svg' alt="" />Grok</a></Anchor>
                    <Anchor><a><img src='./public/Lists.svg' alt="" />Lists</a></Anchor>
                    <Anchor><a><img src='./public/Communities.svg' alt="" />Communities</a></Anchor>
                    <Anchor><a><img src='./public/Premium.svg' alt="" />Premium</a></Anchor>
                    <Anchor><a><img src='./public/Profile.svg' alt="" />Profile</a></Anchor>
                    <Anchor><a><img src='./public/More.svg' alt="" />More</a></Anchor>
                    <Button $post>POST</Button>
                </SideBar>
            </Main>
        </>
    )
}

const Main = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`

const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    width: 23%;
    height: 100vh;
    margin-left: 100px;
    border-right: 1px solid #c4c4c4;
`

const Anchor = styled.div`
    margin-left: 50px;
    margin: 12px;
    font-size: 20px;
    a{
        user-select: none;
        text-align: center;
        height: 30px;
        padding: 15px;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
    }
    a:hover{
        background-color: #f1f1f1;
        border-radius: 50px;
        cursor: pointer;
    }
    a:focus{
    font-weight: 700;
  }
    img{
    text-align: center;
    margin-bottom: -4px;
    margin-right: 10px;
    width: 25px;
    height: 25px;
  }
  .XLogo{
    padding: 15px;
  }
  .XLogo:hover{
    background-color: #f1f1f1;
    border-radius: 100%;
  }
`
