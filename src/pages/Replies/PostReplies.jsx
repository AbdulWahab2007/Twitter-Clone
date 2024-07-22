import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import PostCard from "../../components/PostCard";
import { Button } from "/src/components/Dialog";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "/src/GlobalContext";
import axios from "axios";

export default function PostReplies() {
  const history = useNavigate();
  const goBack = () => {
    history(-1);
  };
  const { isLoggedin, setIsLoggedin } = useContext(Context);
  if (!isLoggedin) {
    return <Navigate to="/" />;
  }
  const [tweet, setTweet] = useState({
    hearts: [],
    retweets: [],
    replies: [],
    _id: "",
    text: "",
    userID: "",
    time: "",
    repliedTo: null,
    __v: 0,
  });
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
        dob: "",
      },
      profilePic: "/src/components/Icons/UserDP.svg",
      coverPhoto: "/src/components/Icons/UserDP.svg",
    },
  });
  const localmyID = localStorage.getItem("myID");
  const [liked, setLiked] = useState(false);
  const params = useParams();
  const { id } = params;
  const handlegetTweet = () => {
    const response = axios
      .get("http://localhost:5000/api/tweet/" + id)
      .then(function (response) {
        setTweet(response.data);
        const match = response.data.hearts.includes(localmyID);
        setLiked(match);
        const response2 = axios
          .get("http://localhost:5000/api/user/?userID=" + response.data.userID)
          .then(function (response2) {
            setUserData(response2.data);
          });
      });
  };
  useEffect(() => {
    handlegetTweet();
  }, []);
  return (
    <>
      <Container>
        <Top>
          <Link className="Home" onClick={goBack}>
            <span className="SpanBack">
              <span className="material-symbols-outlined back">
                arrow_left_alt
              </span>
            </span>
          </Link>
          <h3 className="heading">Post</h3>
        </Top>
        <PostCard
          liked={liked}
          id={tweet._id}
          dp={userData.additionalData.profilePic}
          name={userData.username}
          handle={userData.additionalData.additionalData.name}
          text={tweet.text}
          date={tweet.time}
          replies={tweet.replies.length}
          retweets={tweet.retweets.length}
          likes={tweet.hearts.length}
        />
        <Reply>
          <img className="DP" src="/src/Components/Icons/UserDP.svg" alt="" />
          <textarea placeholder="Post your reply" name="" id=""></textarea>
          <div className="btnContainer">
            <Button $post1>Reply</Button>
          </div>
        </Reply>
        {/* Replies Here */}
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 40%;
  height: 100vh;
  margin-left: 401px;
  border-right: 1px solid #e7e7e7;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Top = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 5px 0px 10px 0px;
  .Home {
    text-decoration: none;
  }
  .heading {
    margin: 0px 0px 0px 25px;
    font-size: 23px;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
  }
  .SpanBack {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 0px 0px 20px;
    width: 45px;
    border-radius: 35px;
    height: 45px;
    color: #565656;
  }
  .SpanBack:hover {
    cursor: pointer;
    background-color: #f1f1f1;
  }
  .back {
    margin: 0px;
  }
`;

const Reply = styled.div`
  display: flex;
  border-bottom: 1px solid #e7e7e7;
  align-items: center;
  width: 100%;
  height: 100px;
  .DP {
    width: 45px;
    height: 45px;
    margin: -10px 0px 0px 10px;
  }
  textarea {
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
  textarea:focus {
    outline: none;
  }
  .btnContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
`;
