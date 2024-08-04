import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Context } from "/src/GlobalContext";
import moment from "moment";
import { toast } from "sonner";
import axios from "axios";

export default function PostCard(props) {
  const time = moment(props.date).fromNow();
  const { isLoggedin, setIsLoggedin } = useContext(Context);
  const localtoken = localStorage.getItem("token");
  const localmyID = localStorage.getItem("myID");
  const [liked, setLiked] = useState(props.liked);
  const [likes, setLikes] = useState("5");
  const [replyPoster, setReplyPoster] = useState({
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
  if (!isLoggedin) {
    return <Navigate to="/" />;
  }
  const handlereplier = () => {
    const response = axios
      .get("http://localhost:5000/api/user/?userID=" + props.userID)
      .then(function (response) {
        setReplyPoster(response.data);
      });
  };
  const handletweet = async () => {
    const response = axios
      .get("http://localhost:5000/api/tweet/" + props.id)
      .then(function (response) {
        const match = response.data.hearts.includes(localmyID);
        setLikes(response.data.hearts.length);
        setLiked(match);
      });
  };
  const handlelike = async () => {
    const data = {
      tweetID: props.id,
    };
    const response = await axios.post(
      "http://localhost:5000/api/tweet/like",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localtoken,
        },
      }
    );
    if (response.status == 200) {
      setLikes(likes + 1);
      setLiked(true);
    }
  };
  const handleUnlike = async () => {
    const data = {
      tweetID: props.id,
    };
    const response = await axios.post(
      "http://localhost:5000/api/tweet/unlike",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localtoken,
        },
      }
    );
    if (response.status == 200) {
      setLikes(likes - 1);
      setLiked(false);
    }
  };
  useEffect(() => {
    handletweet();
    if (props.userID) {
      handlereplier();
    }
  }, []);
  useEffect(() => {
    setLikes(props.likes);
  }, [props.likes]);
  useEffect(() => {
    setLiked(props.liked);
  }, [props.liked]);
  return (
    <>
      <Container>
        <ProfileContainer>
          <img
            className="DP"
            src={
              props.dp != null
                ? props.dp
                : replyPoster.additionalData.profilePic
            }
            alt=""
          />
        </ProfileContainer>
        <Content>
          <Info>
            <h3>
              {props.name != null
                ? props.name
                : replyPoster.additionalData.additionalData.name}
            </h3>
            <p className="InfoP">
              {props.username != null ? props.username : replyPoster.username}
            </p>
            <p className="dot">·</p>
            <p className="InfoP">{time}</p>
          </Info>
          <Link className="Replies" to={"/main/replies/" + props.id}>
            <PostText>
              <p className="text">{props.text}</p>
            </PostText>
          </Link>
          <PostOpts>
            <div className="left">
              <span className="IconContainer">
                <Link className="RepliesNum" to={"/main/replies/" + props.id}>
                  <span className="material-symbols-outlined">chat_bubble</span>
                  <p>{props.replies >= 0 ? props.replies : "#"}</p>
                </Link>
              </span>

              <span className="RepostIconContainer">
                <span className="material-symbols-outlined repost">
                  autorenew
                </span>
                <p>{props.retweets >= 0 ? props.retweets : "#"}</p>
              </span>
              <LikeIconContainer
                $liked={liked}
                onClick={liked ? handleUnlike : handlelike}
                className="LikeIconContainer"
              >
                <span className="material-symbols-outlined like">favorite</span>
                <p>{likes}</p>
              </LikeIconContainer>
            </div>
            <div className="right">
              <span className="RightIconContainer">
                <span className="material-symbols-outlined">bookmark</span>
              </span>
              <span className="RightIconContainer">
                <span className="material-symbols-outlined">upload</span>
              </span>
            </div>
          </PostOpts>
        </Content>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2px;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  &:hover {
    background-color: #f1f1f1;
  }
  .Replies {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-decoration: none;
    color: black;
  }
  .Replies:hover {
    cursor: pointer;
  }
  .RepliesNum {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-decoration: none;
    color: #565656;
    border-radius: 15px;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 8px 0px 10px 0px;
  height: 45px;
  width: 10%;
  .DP {
    width: 45px;
    height: 45px;
    border-radius: 100px;
  }
  .DP:hover {
    cursor: pointer;
  }
  @media (max-width: 430px) {
    margin: 2vw 2vw 2vw 2vw;
    .DP {
      width: 9vw;
      height: 9vw;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 10px 0px 0px;
  h3 {
    margin: 0px;
    font-size: 18px;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
  }
  h3:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  .InfoP {
    margin: 0px 0px 0px 10px;
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    color: #565656;
  }
  .InfoP:hover {
    cursor: pointer;
  }
  .dot {
    margin: 0px -5px 0px 5px;
  }
  @media (max-width: 430px) {
    margin: 2vw 2vw 0vw 0vw;
    h3 {
      font-size: 3.8vw;
    }
    .InfoP {
      font-size: 2.9vw;
    }
  }
`;

const PostText = styled.div`
  display: flex;
  width: 100%;
  .text {
    margin: 5px 20px 20px 0px;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }
  .text:hover {
    cursor: pointer;
  }
  @media (max-width: 430px) {
    .text {
      margin: 1vw 4vw 1vw 0px;
      font-size: 3.5vw;
    }
  }
`;

const PostOpts = styled.div`
  display: flex;
  width: 100%;
  margin: 0px 0px 20px 0px;
  .left {
    display: flex;
    justify-content: space-between;
    width: 70%;
  }
  .right {
    display: flex;
    justify-content: flex-end;
    width: 30%;
  }
  .IconContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85px;
    border-radius: 15px;
    height: 35px;
    color: #565656;
  }
  .IconContainer:hover {
    cursor: pointer;
    color: #1d9bf0;
    background-color: #e7fdfd;
  }
  .RepostIconContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85px;
    border-radius: 15px;
    height: 35px;
    color: #565656;
  }
  .RepostIconContainer:hover {
    cursor: pointer;
    background-color: #eeffee;
    color: #00c600;
  }
  .RightIconContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    width: 30px;
    border-radius: 15px;
    height: 35px;
    color: #565656;
  }
  .RightIconContainer:hover {
    cursor: pointer;
    color: #1d9bf0;
    background-color: #e7fdfd;
  }
  p {
    margin: 0px;
  }
  @media (max-width: 430px) {
      margin: 0px 0px 4vw 0px;
      .left{
        width: 60%;
      }
    .material-symbols-outlined{
      font-size: 4vw;
    }
    p{
      font-size: 3.8vw;
      margin-left: 1vw;
    }
  }
`;

const LikeIconContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85px;
  border-radius: 15px;
  height: 35px;
  color: ${(props) => (props.$liked ? "red" : "#565656")};
  &:hover {
    cursor: pointer;
    background-color: #fbebeb;
    color: ${(props) => (!props.$liked ? "red" : "#565656")};
  }
`;
