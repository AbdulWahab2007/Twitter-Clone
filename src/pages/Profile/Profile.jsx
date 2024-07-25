import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Top } from "../Replies/PostReplies";
import { Button } from "../../components/Dialog";
import { TopCategories } from "../Home/MidSection";
import PostCard from "../../components/PostCard";
import axios from "axios";
import { Context } from "/src/GlobalContext";

export default function Profile() {
  const history = useNavigate();
  const goBack = () => {
    history(-1);
  };
  const [isActive, SetisActive] = useState(0);
  const [myData, setMyData] = useState({
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
  const [tweets, setTweets] = useState([]);
  const localusername = localStorage.getItem("username");
  const handleuserdata = async () => {
    const myresponse = axios
      .get("http://localhost:5000/api/user/?username=" + localusername)
      .then(function (myresponse) {
        setMyData(myresponse.data);
      });
  };
  const handleloadtweets = async () => {
    const response = axios
      .get("http://localhost:5000/api/tweet?username=" + localusername)
      .then(function (response) {
        setTweets(response.data);
      });
  };

  useEffect(() => {
    handleuserdata();
    handleloadtweets();
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
          <h3 className="heading">
            {myData.additionalData.additionalData.name}
          </h3>
        </Top>
        <Info>
          {myData.additionalData ? (
            <img
              src={myData.additionalData.coverPhoto}
              className="Background"
              alt="Image"
            />
          ) : (
            <img
              src="/src/components/Icons/UserDP.svg"
              className="Background"
              alt="Fallback Image"
            />
          )}
          <div className="DPholder">
            {myData.additionalData ? (
              <img
                src={myData.additionalData.profilePic}
                className="DP"
                alt="Image"
              />
            ) : (
              <img
                src="/src/components/Icons/UserDP.svg"
                className="DP"
                alt="Fallback Image"
              />
            )}
            <div className="BtnContainer">
              <Link className="edit" to="/editprofile">
                <Button $follow>Setup Profile</Button>
              </Link>
            </div>
          </div>
          <div className="bio">
            <h3>{myData.additionalData.additionalData.name}</h3>
            {myData.additionalData ? (
              <>
                <p className="userhandle">@{myData.username}</p>
                <p>{myData.additionalData.additionalData.bio}</p>
                <div className="personalInfo">
                  <p className="row">
                    <span className="material-symbols-outlined">
                      location_on
                    </span>
                    {myData.additionalData.additionalData.location}
                  </p>
                  {myData.additionalData.additionalData.website != null ||
                  myData.additionalData.additionalData.website != "" ? (
                    <p className="row">
                      <span className="material-symbols-outlined">link</span>
                      {myData.additionalData.additionalData.website}
                    </p>
                  ) : (
                    <></>
                  )}
                  <p className="row">
                    <span className="material-symbols-outlined">
                      celebration
                    </span>
                    {myData.additionalData.additionalData.dob.substring(0, 15)}
                  </p>
                </div>
              </>
            ) : (
              <></>
            )}
            <p>
              <span className="material-symbols-outlined">calendar_month</span>
              Joined {myData.createdAt.substring(0, 10)}
            </p>
            <p>
              {" "}
              <b>{myData.following.length}</b>&nbsp; Following · &nbsp;
              <b>{myData.followers.length}</b>&nbsp; Followers
            </p>
          </div>
        </Info>
        <TopCategories>
          <button
            onClick={() => SetisActive(0)}
            className={isActive == 0 ? "Category active" : "Category"}
          >
            Posts
          </button>
          <button
            onClick={() => SetisActive(1)}
            className={isActive == 1 ? "Category active" : "Category"}
          >
            Replies
          </button>
          <button
            onClick={() => SetisActive(2)}
            className={isActive == 2 ? "Category active" : "Category"}
          >
            Media
          </button>
        </TopCategories>
        <div className="PostContainer">
          {tweets.map((element, index) => {
            return (
              <div key={index}>
                <PostCard
                  dp={myData.additionalData.profilePic}
                  name={myData.additionalData.additionalData.name}
                  username={"@" + myData.username}
                  id={element._id}
                  text={element.text}
                  date={element.time}
                  replies={element.replies.length}
                  retweets={element.retweets.length}
                  likes={element.hearts.length}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}

export const Container = styled.div`
  width: 40%;
  height: 100vh;
  margin-left: 399px;
  border-right: 1px solid #e7e7e7;
  display: flex;
  flex-direction: column;
  .PostContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .Background {
    width: 100%;
    background-color: #b4bec2;
    height: 205px;
  }
  .DPholder {
    display: flex;
    align-items: center;
    margin: -90px 0px -100px 0px;
    .DP {
      width: 180px;
      height: 180px;
      margin: 0px 0px 0px 0px;
      border-radius: 100px;
    }
  }
  .edit {
    text-decoration: none;
  }
  .BtnContainer {
    width: 30%;
    margin: 10% 0px 0px 38%;
  }
  .bio {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 110px 0px 0px 22px;
    h3 {
      margin: 0px 0px 2px 0px;
      font-size: 25px;
      font-family: "Roboto Slab", serif;
      font-optical-sizing: auto;
      font-weight: 600;
      font-style: normal;
    }
    p {
      display: flex;
      align-items: center;
      margin: 2px 0px 5px 0px;
      font-size: 16px;
      font-family: "Montserrat", sans-serif;
      font-optical-sizing: auto;
      font-weight: 500;
      font-style: normal;
      color: #565656;
    }
    .userhandle {
      margin: -5px 0px 10px 0px;
    }
    .personalInfo {
      display: flex;
      width: 100%;
      margin: 2px 0px 5px 0px;
    }
    .row {
      margin: 0px 20px 0px 0px;
    }
    span {
      margin: -2px 0px 0px -6px;
    }
  }
`;
