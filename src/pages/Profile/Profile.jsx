import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Top } from '../Replies/PostReplies'
import { Button } from '../../components/Dialog'
import { TopCategories } from '../Home/MidSection'
import PostCard from '../../components/PostCard'

export default function Profile() {
    const [isActive, SetisActive] = useState(0);
    return (
        <>
            <Container>
                <Top>
                    <Link className="Home" to="/main/home">
                        <span className='SpanBack'><span className="material-symbols-outlined back">arrow_left_alt</span></span>
                    </Link>
                    <h3 className='heading'>Demo Name</h3>
                </Top>
                <Info>
                    <div className="Background"></div>
                    <div className="DPholder">
                        <img className='DP' src='/src/Components/Icons/UserDP.svg' alt='' />
                        <div className="BtnContainer">
                            <Button $follow>Setup Profile</Button>
                        </div>
                    </div>
                    <div className="bio">
                        <h3>Demo Name</h3>
                        <p>@DemoUsername0011</p>
                        <p>Joined month ####</p>
                        <p># Following · # Followers</p>
                    </div>
                </Info>
                <TopCategories>
                    <button onClick={() => SetisActive(0)} className={isActive == 0 ? "Category active" : "Category"}>Posts</button>
                    <button onClick={() => SetisActive(1)} className={isActive == 1 ? "Category active" : "Category"}>Replies</button>
                    <button onClick={() => SetisActive(2)} className={isActive == 2 ? "Category active" : "Category"}>Media</button>
                </TopCategories>
                <div className="PostContainer">
                    <PostCard text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, non. Culpa porro molestias, quo voluptate cum alias aperiam, quae neque sunt optio nisi saepe beatae impedit quia, quasi dignissimos sint atque amet itaque quisquam deleniti fugiat modi. Vel ad consequatur dignissimos officiis cumque doloribus quas minima impedit sunt. Doloremque facilis tempore laboriosam possimus perspiciatis excepturi, aut earum quos nulla eum!" />
                    <PostCard text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                    <PostCard text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, non. Culpa porro molestias, quo voluptate cum alias aperiam, quae neque sunt optio nisi saepe beatae impedit quia, quasi dignissimos sint atque amet itaque quisquam deleniti fugiat modi. Vel ad consequatur dignissimos officiis cumque doloribus quas minima impedit sunt." />
                    <PostCard text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eligendi ad explicabo excepturi? Tempora consectetur eum perferendis assumenda voluptatem nihil provident corrupti, soluta unde molestias odit harum aliquid quo amet vitae ut quaerat fugiat doloremque rerum qui veritatis possimus reprehenderit modi? Tenetur adipisci expedita autem cum veritatis iste quidem ipsa, modi soluta ipsum quia dolores, blanditiis ad amet magni cumque provident deleniti itaque ab quo alias numquam porro. Illo, est consequatur quaerat aut dolores et qui vitae ea omnis alias exercitationem nobis reiciendis id amet facere, autem quo debitis pariatur facilis. Eos architecto earum est debitis doloremque tempora minus omnis. Saepe, sit fugiat cumque illo, vel omnis neque temporibus voluptate sint eaque placeat consequuntur mollitia, ipsum et. Facilis praesentium quasi adipisci unde, minima harum dicta vel laborum quis ab facere omnis consequuntur quisquam maxime distinctio eveniet commodi sint ea libero excepturi beatae doloremque nobis dolorem eaque. Fugiat nihil perferendis sapiente." />
                </div>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 40%;
    height: 100vh;
    margin-left: 399px;
    border-right: 1px solid #e7e7e7;
    display: flex;
    flex-direction: column;
    .PostContainer{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 425px;
    .Background{
        width: 100%;
        background-color: #b4bec2;
        height: 205px;
    }
    .DPholder{
        display: flex;
        align-items: center;
        margin: -90px 0px -100px 0px;
        .DP{
            width: 180px;
            height: 180px;
            margin: 0px 0px 0px 0px;
        }
    }
    .BtnContainer{
        width: 30%;
        margin: 10% 0px 0px 38%;
    }
    .bio{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 95px 0px 0px 22px;
        h3{
            margin: 0px 0px 2px 0px;
            font-size: 25px;
            font-family: "Roboto Slab", serif;
            font-optical-sizing: auto;
            font-weight: 600;
            font-style: normal;
        }
        p{
            margin: 2px 0px 5px 0px;
            font-size: 16px;
            font-family: "Montserrat", sans-serif;
            font-optical-sizing: auto;
            font-weight: 500;
            font-style: normal;
            color: #565656;
        }
    }
`

