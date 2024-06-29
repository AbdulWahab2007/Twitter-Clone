import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Context } from '/src/App'
export default function PostCard(props) {
  const { isLoggedin, setIsLoggedin } = useContext(Context);
  if (!isLoggedin) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Container>
        <Link className="Replies" to="/main/replies">
          <ProfileContainer>
            <img className='DP' src='/src/Components/Icons/UserDP.svg' alt='' />
          </ProfileContainer>
          <Content>
            <Info>
              <h3>Demo Name</h3>
              <p className='InfoP'>@DemoUsername0011</p>
              <p className='dot'>·</p>
              <p className='InfoP'>19h</p>
            </Info>
            <PostText>
              <p className='text'>{props.text}</p>
            </PostText>
            <PostOpts>
              <div className="left">
                <span className='IconContainer'><span className="material-symbols-outlined">chat_bubble</span><p>120</p></span>
                <span className='RepostIconContainer'><span className="material-symbols-outlined repost">autorenew</span><p>3.7k</p></span>
                <span className='LikeIconContainer'><span className="material-symbols-outlined like">favorite</span><p>17k</p></span>
                <span className='IconContainer'><span className="material-symbols-outlined">bar_chart</span><p>989k</p></span>
              </div>
              <div className="right">
                <span className='RightIconContainer'><span className="material-symbols-outlined">bookmark</span></span>
                <span className='RightIconContainer'><span className="material-symbols-outlined">upload</span></span>
              </div>
            </PostOpts>
          </Content>
        </Link>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2px;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  &:hover{
    background-color: #f1f1f1;
    cursor: pointer;
  }
  .Replies{
    display: flex;
    width: 100%;
    text-decoration: none;
    color: black;
  }
`

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 10%;
  .DP{
        width: 45px;
        height: 45px;
        margin: 8px 0px 10px 0px;
    }
  .DP:hover{
    cursor: pointer;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  
`

const Info = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0px 0px 0px;
  h3{
      margin: 0px;
      font-size: 18px;
      font-family: "Roboto Slab", serif;
      font-optical-sizing: auto;
      font-weight: 600;
      font-style: normal;
  }
  h3:hover{
    cursor: pointer;
    text-decoration: underline;
  }
  .InfoP{
     margin: 0px 0px 0px 10px;
     font-size: 14px;
     font-family: "Montserrat", sans-serif;
     font-optical-sizing: auto;
     font-weight: 500;
     font-style: normal;
     color: #565656;
  }
  .InfoP:hover{
    cursor: pointer;
  }
  .dot{
    margin: 0px -5px 0px 5px;
  }
`

const PostText = styled.div`
  display: flex;
  width: 100%;
  .text{
    margin: 5px 0px 20px 0px;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }
  .text:hover{
    cursor: pointer;
  }
`

const PostOpts = styled.div`
  display: flex;
  width: 100%;
  margin: 0px 0px 20px 0px;
  .left{
    display: flex;
    justify-content: space-between;
    width: 70%;
  }
  .right{
    display: flex;
    justify-content: flex-end;
    width: 30%;
  }
  .IconContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85px;
    border-radius: 15px;
    height: 35px;
    color: #565656;
  }
  .IconContainer:hover{
    cursor: pointer;
    color: #1d9bf0;
    background-color: #e7fdfd;
  }
  .LikeIconContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85px;
    border-radius: 15px;
    height: 35px;
    color: #565656;
  }
  .LikeIconContainer:hover{
    cursor: pointer;
    background-color: #fbebeb;
    color: red;
  }
  .RepostIconContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85px;
    border-radius: 15px;
    height: 35px;
    color: #565656;
  }
  .RepostIconContainer:hover{
    cursor: pointer;
    background-color: #eeffee;
    color: #00c600;
  }
  .RightIconContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    width: 30px;
    border-radius: 15px;
    height: 35px;
    color: #565656;
  }
  .RightIconContainer:hover{
    cursor: pointer;
    color: #1d9bf0;
    background-color: #e7fdfd;
  }
  p{
    margin: 0px;
  }
`