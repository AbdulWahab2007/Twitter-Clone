import React from 'react'
import styled from 'styled-components'
import { Button } from './Dialog'
import Popover from './ProfilePopover'

export default function SideBar() {
  return (
    <>
      <SideBarContainer>
        <Anchor><img className='XLogo' src="/src/Components/Icons/TwitterLogo.svg" alt="" /></Anchor>
        <Anchor><a href='/home'><img src='/src/Components/Icons/Home.svg' alt="" />Home</a></Anchor>
        <Anchor><a href='/explore'><img src='/src/Components/Icons/Explore.svg' alt="" />Explore</a></Anchor>
        <Anchor><a href='/notifications'><img src='/src/Components/Icons/Notifications.svg' alt="" />Notifications</a></Anchor>
        <Anchor><a href='/messages'><img src='/src/Components/Icons/Messages.svg' alt="" />Messages</a></Anchor>
        <Anchor><a href='/grok'><img src='/src/Components/Icons/Grok.svg' alt="" />Grok</a></Anchor>
        <Anchor><a href='/lists'><img src='/src/Components/Icons/Lists.svg' alt="" />Lists</a></Anchor>
        <Anchor><a href='/communities'><img src='/src/Components/Icons/Communities.svg' alt="" />Communities</a></Anchor>
        <Anchor><a href='/premium'><img src='/src/Components/Icons/Premium.svg' alt="" />Premium</a></Anchor>
        <Anchor><a href='/profile'><img src='/src/Components/Icons/Profile.svg' alt="" />Profile</a></Anchor>
        <Anchor><a href='/more'><img src='/src/Components/Icons/More.svg' alt="" />More</a></Anchor>
        <Button $post>POST</Button>
        <Popover />
      </SideBarContainer>
    </>
  )
}

const SideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 100vh;
    margin-left: 100px;
    border-right: 1px solid #c4c4c4;
`

const Anchor = styled.div`
    margin-left: 50px;
    margin: 12px;
    font-size: 20px;
    a{
        text-align: center;
        color: black;
        text-decoration: none;
        height: 30px;
        padding: 15px;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
        border-radius: 100px;
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
    margin-bottom: -20px;
    border-radius: 100%;
  }
  .XLogo:hover{
    background-color: #f1f1f1;
    border-radius: 100%;
  }
`
