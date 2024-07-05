import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { Button } from '../../components/Dialog'
import PostCard from '../../components/PostCard'
import axios from 'axios';
import { Context } from '/src/GlobalContext'

export default function MidSection() {

    const [isActive, SetisActive] = useState(0);
    const [text, setText] = useState('');
    const { token, setToken } = useContext(Context);
    const localtoken = localStorage.getItem("token");
    const handleposttweet = async () => {
        console.log(localtoken);
        const data = {text}
        console.log(data);
        const response = await axios.post("http://localhost:5000/api/tweet/", data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localtoken
            }
        })
        if(response.status == 200){
            alert("Tweet posted successfully!")
            setText('')
        }
        console.log(response);
    }

    return (
        <>
            <Container>
                <TopCategories>
                    <button onClick={() => SetisActive(0)} className={isActive == 0 ? "Category active" : "Category"}>For You</button>
                    <button onClick={() => SetisActive(1)} className={isActive == 1 ? "Category active" : "Category"}>Following</button>
                </TopCategories>
                <PostSection>
                    <div className="top">
                        <img className='DP' src='/src/Components/Icons/UserDP.svg' alt='' />
                        <textarea value={text} onChange={(e) => { setText(e.target.value) }} placeholder='What is happening?!' name="" id=""></textarea>
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
                            <Button $post1 onClick={handleposttweet}>Post</Button>
                        </div>
                    </div>
                </PostSection>
                <div className="PostContainer">
                    <PostCard date="19h" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, non. Culpa porro molestias, quo voluptate cum alias aperiam, quae neque sunt optio nisi saepe beatae impedit quia, quasi dignissimos sint atque amet itaque quisquam deleniti fugiat modi. Vel ad consequatur dignissimos officiis cumque doloribus quas minima impedit sunt. Doloremque facilis tempore laboriosam possimus perspiciatis excepturi, aut earum quos nulla eum!" />
                    <PostCard date="19h" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                    <PostCard date="19h" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, non. Culpa porro molestias, quo voluptate cum alias aperiam, quae neque sunt optio nisi saepe beatae impedit quia, quasi dignissimos sint atque amet itaque quisquam deleniti fugiat modi. Vel ad consequatur dignissimos officiis cumque doloribus quas minima impedit sunt." />
                    <PostCard date="19h" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eligendi ad explicabo excepturi? Tempora consectetur eum perferendis assumenda voluptatem nihil provident corrupti, soluta unde molestias odit harum aliquid quo amet vitae ut quaerat fugiat doloremque rerum qui veritatis possimus reprehenderit modi? Tenetur adipisci expedita autem cum veritatis iste quidem ipsa, modi soluta ipsum quia dolores, blanditiis ad amet magni cumque provident deleniti itaque ab quo alias numquam porro. Illo, est consequatur quaerat aut dolores et qui vitae ea omnis alias exercitationem nobis reiciendis id amet facere, autem quo debitis pariatur facilis. Eos architecto earum est debitis doloremque tempora minus omnis. Saepe, sit fugiat cumque illo, vel omnis neque temporibus voluptate sint eaque placeat consequuntur mollitia, ipsum et. Facilis praesentium quasi adipisci unde, minima harum dicta vel laborum quis ab facere omnis consequuntur quisquam maxime distinctio eveniet commodi sint ea libero excepturi beatae doloremque nobis dolorem eaque. Fugiat nihil perferendis sapiente." />
                </div>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 40%;
    height: 100vh;
    margin-left: 397px;
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

export const TopCategories = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    border-bottom: 1px solid #e7e7e7;
    .Category{
        width: 50%;
        height: 55px;
        border: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
        color: #536471;
        user-select: none;
        background-color: white;
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
    border-bottom: 1px solid #e7e7e7;
    .top{
        display: flex;
        align-items: center;
        width: 100%;
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
