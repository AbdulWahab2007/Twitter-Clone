import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container, Info } from '../Profile/Profile'
import { Top } from '../Replies/PostReplies'
import { TopCategories } from '../Home/MidSection'
import PostCard from '../../components/PostCard'
import { Button } from '../../components/Dialog'
import axios from 'axios';
import { Context } from '/src/GlobalContext'
import { toast } from 'sonner';

export default function UserProfile() {
    const { name, loginusername, setName, setloginUsername } = useContext(Context);
    const [isActive, SetisActive] = useState(0);
    const [myData, setMyData] = useState({});
    const [userData, setUserData] = useState({});
    const [followers, setFollowers] = useState(0);
    const [following, setFollowing] = useState(0);
    const [userID, setUserID] = useState('');
    const [tweets, setTweets] = useState([]);
    const [followed, setFollowed] = useState(false);
    const [dateJoined, setDatejoined] = useState('');
    const localtoken = localStorage.getItem("token");
    const params = useParams();
    const { username } = params;
    const handleuserdata = async () => {
        const response = axios.get("http://localhost:5000/api/user/?username=" + username).then(function (response) {
            setUserData(response.data)
            setFollowers(response.data.followers.length)
            setFollowing(response.data.following.length)
            setDatejoined(`${response.data.createdAt.substring(0, 10)}`)
            const changedID = response.data._id
            setUserID(changedID)
            const myresponse = axios.get("http://localhost:5000/api/user/?username=" + name).then(function (myresponse) {
                setMyData(myresponse.data)
                const match = myresponse.data.following.includes(changedID);
                setFollowed(match)
            })
        })
    }
    const handleloadtweets = async () => {
        const response = axios.get("http://localhost:5000/api/tweet?username=" + username).then(function (response) {
            setTweets(response.data)
        })
    }
    const handlefollowuser = async () => {
        const data = {}
        const response = await axios.post("http://localhost:5000/api/user/follow?userToBeFollowed=" + userID, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localtoken
            }
        })
        if (response.status == 200) {
            toast.success("Followed")
            setFollowed(true)
        }
    }
    const handleunfollowuser = async () => {
        const data = {}
        const response = await axios.post("http://localhost:5000/api/user/unfollow?userToBeUnFollowed=" + userID, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localtoken
            }
        })
        if (response.status == 200) {
            toast.success("UnFollowed")
            setFollowed(false)
        }
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
                            <Button $follow onClick={followed ? handleunfollowuser : handlefollowuser}>{followed ? "Unfollow" : "Follow"}</Button>
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
