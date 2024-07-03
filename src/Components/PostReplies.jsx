import React, { useContext } from 'react'
import styled from 'styled-components'
import PostCard from './PostCard'
import { Button } from './Dialog'
import { Link } from 'react-router-dom'
import { Context } from '/src/GlobalContext'

export default function PostReplies() {
    const { isLoggedin, setIsLoggedin } = useContext(Context);
    if (!isLoggedin) {
        return <Navigate to="/" />;
    }
    return (
        <>
            <Container>
                <div className="top">
                    <Link className="Home" to="/main/home">
                        <span className='SpanBack'><span className="material-symbols-outlined back">arrow_left_alt</span></span>
                    </Link>
                    <h3 className='heading'>Post</h3>
                </div>
                <PostCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sapiente voluptas quae nobis culpa velit delectus sit nulla accusamus dolorum ex, ducimus, veritatis iusto ratione porro! Vitae ipsum sint nostrum?"} />
                <Reply>
                    <img className='DP' src='/src/Components/Icons/UserDP.svg' alt='' />
                    <textarea placeholder='Post your reply' name="" id=""></textarea>
                    <div className="btnContainer">
                        <Button $post1>Reply</Button>
                    </div>
                </Reply>
                <PostCard text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, esse!"} />
            </Container >
        </>
    )
}

const Container = styled.div`
    width: 40%;
    height: 100vh;
    margin-left: 401px;
    border-right: 1px solid #e7e7e7;
    display: flex;
    flex-direction: column;
    align-items: center;
    .top{
        display: flex;
        align-items: center;
        width: 100%;
        margin: 5px 0px 10px 0px;
    }
    .Home{
        text-decoration: none;
    }
    .heading{
        margin: 0px 0px 0px 30px;
        font-size: 23px;
        font-family: "Roboto Slab", serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;
    }
    .SpanBack{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px 0px 0px 20px;
        width: 45px;
        border-radius: 35px;
        height: 45px;
        color: #565656;
    }
    .SpanBack:hover{
        cursor: pointer;
        background-color: #f1f1f1;
    }
    .back{
        margin: 0px;
    }
`

const Reply = styled.div`
    display: flex;
    border-bottom: 1px solid #e7e7e7;
    align-items: center;
    width: 100%;
    height: 100px;
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
    .btnContainer{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
    }
`