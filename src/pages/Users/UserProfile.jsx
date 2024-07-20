import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Container, Info } from '../Profile/Profile'
import { Top } from '../Replies/PostReplies'
import { TopCategories } from '../Home/MidSection'
import PostCard from '../../components/PostCard'
import { Button } from '../../components/Dialog'
import axios from 'axios';
import { Context } from '/src/GlobalContext'
import { toast } from 'sonner';

export default function UserProfile() {
    const history = useNavigate()
    const goBack = () => {
        history(-1);
    };
    const { loginusername, setName, setloginUsername } = useContext(Context);
    const name = localStorage.getItem("name")
    const [isActive, SetisActive] = useState(0);
    const [myData, setMyData] = useState({});
    const [userData, setUserData] = useState({
        following: [],
        followers: [],
        _id: "",
        username: "",
        email: "",
        password: "",
        createdAt: "",
        __v: 0,
        additionalData: {
            additionalData: {
                name: "",
                bio: "",
                location: "",
                website: "",
                dob: ""
            },
            profilePic: "/src/components/Icons/UserDP.svg",
            coverPhoto: "/src/components/Icons/UserDP.svg"
        }
    });
    const [userID, setUserID] = useState('');
    const [tweets, setTweets] = useState([]);
    const [followed, setFollowed] = useState(false);
    const localtoken = localStorage.getItem("token");
    const params = useParams();
    const { username } = params;
    const handleuserdata = async () => {
        const response = axios.get("http://localhost:5000/api/user/?username=" + username).then(function (response) {
            setUserData(response.data)
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
                    <Link className="Home" onClick={goBack}>
                        <span className='SpanBack'><span className="material-symbols-outlined back">arrow_left_alt</span></span>
                    </Link>
                    <h3 className='heading'>{userData.username}</h3>
                </Top>
                <Info>
                    {userData.additionalData ? (
                        <img src={userData.additionalData.coverPhoto} className="Background" alt="Image" />
                    ) : (
                        <img src="/src/components/Icons/UserDP.svg" className="Background" alt="Fallback Image" />
                    )}
                    <div className="DPholder">
                        {userData.additionalData ? (
                            <img src={userData.additionalData.profilePic} className="DP" alt="Image" />
                        ) : (
                            <img src="/src/components/Icons/UserDP.svg" className="DP" alt="Fallback Image" />
                        )}
                        <div className="BtnContainer">
                            <Button $follow onClick={followed ? handleunfollowuser : handlefollowuser}>{followed ? "Unfollow" : "Follow"}</Button>
                        </div>
                    </div>
                    <div className="bio">
                        <h3>{userData.username}</h3>
                        {userData.additionalData ? (
                            <>
                                <p className='userhandle'>@{userData.additionalData.additionalData.name}</p>
                                <p>{userData.additionalData.additionalData.bio}</p>
                                <div className="personalInfo">
                                    <p className='row'><span className="material-symbols-outlined">location_on</span>{userData.additionalData.additionalData.location}</p>
                                    <p className='row'><span className="material-symbols-outlined">link</span>{userData.additionalData.additionalData.website}</p>
                                    <p className='row'><span className="material-symbols-outlined">celebration</span>{userData.additionalData.additionalData.dob.substring(0, 15)}</p>
                                </div>
                            </>
                        ) : (

                            <></>
                        )}
                        <p><span className="material-symbols-outlined">calendar_month</span>Joined {userData.createdAt.substring(0, 10)}</p>
                        <p> <b>{userData.following.length}</b>&nbsp; Following · &nbsp;<b>{userData.followers.length}</b>&nbsp; Followers</p>
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
                            <PostCard dp={userData.additionalData.profilePic} name={userData.username} handle={userData.additionalData.additionalData.name} id={element._id} text={element.text} date={element.time} replies={element.replies.length} retweets={element.retweets.length} likes={element.hearts.length} />
                        </div>

                    })}
                </div>
            </Container>
        </>
    )
}
