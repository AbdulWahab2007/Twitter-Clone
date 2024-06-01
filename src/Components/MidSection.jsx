import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from './Dialog'
import PostCard from './PostCard'

export default function MidSection() {

    const [isActive1, SetisActive1] = useState(true)
    const [isActive2, SetisActive2] = useState(false)
    const handleclick1 = () => {
        SetisActive1(true)
        SetisActive2(false)
    }
    const handleclick2 = () => {
        SetisActive1(false)
        SetisActive2(true)
    }
    return (
        <>
            <Container>
                <TopCategories>
                    <div onClick={handleclick1} className={isActive1 ? "Category active" : "Category"}>For You</div>
                    <div onClick={handleclick2} className={isActive2 ? "Category active" : "Category"}>Following</div>
                </TopCategories>
                <PostSection>
                    <div className="top">
                        <img className='DP' src='/src/Components/Icons/UserDP.svg' alt='' />
                        <textarea placeholder='What is happening?!' name="" id=""></textarea>
                    </div>
                    <hr />
                    <div className="bottom">
                        <div className="ImgContainer">
                            <span><img className='TextOpt' src="/src/Components/Icons/Image.svg" alt="" /></span>
                            <span><img className='TextOpt' src="/src/Components/Icons/Gif.svg" alt="" /></span>
                            <span><img className='TextOpt' src="/src/Components/Icons/Poll.svg" alt="" /></span>
                            <span><img className='TextOpt' src="/src/Components/Icons/Emoji.svg" alt="" /></span>
                            <span><img className='TextOpt' src="/src/Components/Icons/Schedule.svg" alt="" /></span>
                            <span><img className='TextOpt' src="/src/Components/Icons/Location.svg" alt="" /></span>
                        </div>
                        <div className="btncontainer">
                            <Button $post1>Post</Button>
                        </div>
                    </div>
                </PostSection>
                <div className="PostContainer">
                    <PostCard/>
                </div>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 40%;
    height: 100vh;
    border-right: 1px solid #e7e7e7;
    display: flex;
    flex-direction: column;
    align-items: center;
    .PostContainer{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
    }
`

const TopCategories = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    border-bottom: 1px solid #e7e7e7;
    .Category{
        width: 50%;
        height: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
        color: #536471;
        user-select: none;
    }
    .Category:hover{
        background-color: #f1f1f1;
        cursor: pointer;
    }
    .active{
        color: black;
        font-weight: 700;
        border-bottom: 3px solid #1d9bf0;
    }
`

const PostSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 150px;
    border-bottom: 1px solid #e7e7e7;
    .top{
        display: flex;
        align-items: center;
        width: 100%;
        height: 95px;
    }
    .DP{
        width: 45px;
        height: 45px;
        margin: -10px 0px 0px 10px;
    }
    textarea{
        display: flex;
        width: 85%;
        border: 0px;
        font-size: 25px;
        height: 60px;
        margin: 20px 0px 0px 15px;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
    }
    textarea:focus{
        outline: none;
    }
    hr{
      width: 85%;
      height: 1px;
      background-color: #e7e7e7;
      border: 0px;
    }
    .bottom{
        display: flex;
        align-items: center;
        width: 100%;
        height: 55px;
    }
    .ImgContainer{
        display: flex;
        margin-left: 45px;
        width: 75%;
    }
    span{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 35px;
    }
    span:hover{
        cursor: pointer;
        border-radius: 60px;
        background-color: #e7fdfd;
    }
    .TextOpt{
        width: 25px;
    }
    .btncontainer{
        width: 25%;
    }
`
