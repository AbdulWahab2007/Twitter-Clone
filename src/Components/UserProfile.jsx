import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container, Info } from '../pages/Profile/Profile'
import { Top } from '../pages/Replies/PostReplies'
import { TopCategories } from '../pages/Home/MidSection'
import PostCard from './PostCard'
import { Button } from './Dialog'
import axios from 'axios';

export default function UserProfile() {
    const [isActive, SetisActive] = useState(0);
    const [userData, setUserData] = useState({});
    const [followers, setFollowers] = useState(5);
    const [following, setFollowing] = useState(5);
    const [tweets, setTweets] = useState([]);
    const [dateJoined, setDatejoined] = useState('');
    const params = useParams();
    const { username } = params;
    const handleuserdata = async () => {
        const data = { username }
        const response = axios.get("http://localhost:5000/api/user/?username=" + username).then(function (response) {
            setUserData(response.data)
            setFollowers(response.data.followers.length)
            setFollowing(response.data.following.length)
            setDatejoined(`${response.data.createdAt.substring(0, 10)}`)
        })
    }
    const handleloadtweets = async () => {
        const data = { username }
        const response = axios.get("http://localhost:5000/api/tweet?username=" + username).then(function (response) {
            console.log(response.data[0])
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
                    <h3 className='heading'>{userData.username}</h3>
                </Top>
                <Info>
                    <div className="Background"></div>
                    <div className="DPholder">
                        <img className='DP' src='/src/Components/Icons/UserDP.svg' alt='' />
                        <div className="BtnContainer">
                            <Button $follow>Follow</Button>
                        </div>
                    </div>
                    <div className="bio">
                        <h3>{userData.username}</h3>
                        <p>{userData.email}</p>
                        <p>Joined {dateJoined}</p>
                        <p> {following} Following · {followers} Followers</p>
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
                                <PostCard text={element.text} date={element.time} />
                        </div>

                    })}
                </div>
            </Container>
        </>
    )
}
