import React from 'react'
import styled from 'styled-components'
import { Button } from './Dialog'
import { Link } from 'react-router-dom'
import Popover from './ProfilePopover'

export default function SideBar() {
  return (
    <>
      <SideBarContainer>
        <Anchor><img className='XLogo' src="/src/Components/Icons/TwitterLogo.svg" alt="" /></Anchor>
        <Anchor><Link to='/main/home'><img src='/src/Components/Icons/Home.svg' alt="" />Home</Link></Anchor>
        <Anchor><Link to='/explore'><img src='/src/Components/Icons/Explore.svg' alt="" />Explore</Link></Anchor>
        <Anchor><Link to='/notifications'><img src='/src/Components/Icons/Notifications.svg' alt="" />Notifications</Link></Anchor>
        <Anchor><Link to='/messages'><img src='/src/Components/Icons/Messages.svg' alt="" />Messages</Link></Anchor>
        <Anchor><Link to='/grok'><img src='/src/Components/Icons/Grok.svg' alt="" />Grok</Link></Anchor>
        <Anchor><Link to='/lists'><img src='/src/Components/Icons/Lists.svg' alt="" />Lists</Link></Anchor>
        <Anchor><Link to='/communities'><img src='/src/Components/Icons/Communities.svg' alt="" />Communities</Link></Anchor>
        <Anchor><Link to='/premium'><img src='/src/Components/Icons/Premium.svg' alt="" />Premium</Link></Anchor>
        <Anchor><Link to='/main/profile'><img src='/src/Components/Icons/Profile.svg' alt="" />Profile</Link></Anchor>
        <Anchor><Link to='/more'><img src='/src/Components/Icons/More.svg' alt="" />More</Link></Anchor>
        <Button $post>Post</Button>
        <Popover />
      </SideBarContainer>
    </>
  )
}

const SideBarContainer = styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
    width: 20%;
    height: 100vh;
    margin-left: 100px;
    border-right: 1px solid #e7e7e7;
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
