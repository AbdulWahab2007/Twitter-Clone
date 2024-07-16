import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Top } from '../Replies/PostReplies'
import { Button } from '../../components/Dialog'
import { TopCategories } from '../Home/MidSection'
import PostCard from '../../components/PostCard'
import axios from 'axios';
import { Context } from '/src/GlobalContext'

export default function Profile() {
    const [isActive, SetisActive] = useState(0);
    const [myData, setMyData] = useState({});
    const [followers, setFollowers] = useState(0);
    const [following, setFollowing] = useState(0);
    const [dateJoined, setDatejoined] = useState('');
    const [tweets, setTweets] = useState([]);
    const { name } = useContext(Context)
    const handleuserdata = async () => {
        const myresponse = axios.get("http://localhost:5000/api/user/?username=" + name).then(function (myresponse) {
            setMyData(myresponse.data);
            setFollowers(myresponse.data.followers.length)
            setFollowing(myresponse.data.following.length)
            setDatejoined(`${myresponse.data.createdAt.substring(0, 10)}`)
        })
    }
    const handleloadtweets = async () => {
        const response = axios.get("http://localhost:5000/api/tweet?username=" + name).then(function (response) {
            setTweets(response.data)
        })
    }

    useEffect(() => {
        handleuserdata()
        handleloadtweets()
    }, [])

    return (
        <>
            <Container>
                <Top>
                    <Link className="Home" to="/main/home">
                        <span className='SpanBack'><span className="material-symbols-outlined back">arrow_left_alt</span></span>
                    </Link>
                    <h3 className='heading'>{myData.username}</h3>
                </Top>
                <Info>
                    <img src='' className="Background"/>
                    <div className="DPholder">
                        <img className='DP' src='/src/Components/Icons/UserDP.svg' alt='' />
                        <div className="BtnContainer">
                            <Button $follow>Setup Profile</Button>
                        </div>
                    </div>
                    <div className="bio">
                        <h3>{myData.username}</h3>
                        <p>{myData.email}</p>
                        <p>Joined {dateJoined}</p>
                        <p>{following} Following · {followers} Followers</p>
                    </div>
                </Info>
                <TopCategories>
                    <button onClick={() => SetisActive(0)} className={isActive == 0 ? "Category active" : "Category"}>Posts</button>
                    <button onClick={() => SetisActive(1)} className={isActive == 1 ? "Category active" : "Category"}>Replies</button>
                    <button onClick={() => SetisActive(2)} className={isActive == 2 ? "Category active" : "Category"}>Media</button>
                </TopCategories>
                <div className="PostContainer">
                    {tweets.map((element, index) => {
                        return <div key={index}>
                            <PostCard text={element.text} date={element.time} replies={element.replies.length} retweets={element.retweets.length} likes={element.hearts.length} />
                        </div>

                    })}
                </div>
            </Container>
        </>
    )
}

export const Container = styled.div`
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

export const Info = styled.div`
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
            border-radius: 100px;
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
        margin: 110px 0px 0px 22px;
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

