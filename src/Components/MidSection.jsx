import React, { useState } from 'react'
import styled from 'styled-components'

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
                        <div className="topright">
                            <textarea name="" id=""></textarea>
                        </div>
                    </div>
                    <div className="bottom"></div>
                </PostSection>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 40%;
    height: 100vh;
    border-right: 1px solid #c4c4c4;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TopCategories = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    border-bottom: 1px solid #c4c4c4;
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
    background-color: aqua;
    .top{
        display: flex;
        width: 100%;
        height: 95px;
        background-color: #4aaa8a;
    }
    .DP{
        width: 45px;
        height: 45px;
        margin: 22px 0px 0px 10px;
    }
    .topright{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 92%;
        background-color: bisque;
    }
    textarea{
        border: 0px;
        font-size: 25px;
        height: 60px;
        margin: 0px 0px 0px 5px;
    }
    textarea:focus{
        outline: none;
    }
    .botom{
        display: flex;
        width: 100%;
        height: 55px;
        background-color: aquamarine;
    }
`
