import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "./Dialog";
import { Link } from "react-router-dom";
import Popover from "./ProfilePopover";
import { Context } from "/src/GlobalContext";
import axios from "axios";

export default function SideBar() {
  const name = localStorage.getItem("name");
  const username = localStorage.getItem("username");
  const { handleUnavailable } = useContext(Context);
  const [dp, setDp] = useState("/src/components/Icons/UserDP.svg");
  const handleuserdata = async () => {
    const myresponse = axios
      .get("http://localhost:5000/api/user/?username=" + username)
      .then(function (myresponse) {
        setDp(myresponse.data.additionalData.profilePic);
      });
  };
  useEffect(() => {
    handleuserdata();
  }, []);
  return (
    <>
      <SideBarContainer>
        <Anchor>
          <img
            className="XLogo"
            src="/src/Components/Icons/TwitterLogo.svg"
            alt=""
          />
        </Anchor>
        <Anchor>
          <Link to="/main/home">
            <img src="/src/Components/Icons/Home.svg" alt="" />
            <p>Home</p>
          </Link>
        </Anchor>
        <Anchor>
          <Link to="/main/explore">
            <img src="/src/Components/Icons/Explore.svg" alt="" />
            <p>Explore</p>
          </Link>
        </Anchor>
        <Anchor>
          <Link to="/notifications">
            <img src="/src/Components/Icons/Notifications.svg" alt="" />
            <p>Notifications</p>
          </Link>
        </Anchor>
        <Anchor onClick={handleUnavailable}>
          <Link>
            <img src="/src/Components/Icons/Messages.svg" alt="" />
            <p>Messages</p>
          </Link>
        </Anchor>
        <Anchor onClick={handleUnavailable}>
          <Link>
            <img src="/src/Components/Icons/Grok.svg" alt="" />
            <p>Grok</p>
          </Link>
        </Anchor>
        <Anchor onClick={handleUnavailable}>
          <Link>
            <img src="/src/Components/Icons/Lists.svg" alt="" />
            <p>Lists</p>
          </Link>
        </Anchor>
        <Anchor onClick={handleUnavailable}>
          <Link>
            <img src="/src/Components/Icons/Communities.svg" alt="" />
            <p>Communities</p>
          </Link>
        </Anchor>
        <Anchor onClick={handleUnavailable}>
          <Link>
            <img src="/src/Components/Icons/Premium.svg" alt="" />
            <p>Premium</p>
          </Link>
        </Anchor>
        <Anchor>
          <Link to="/main/profile">
            <img src="/src/Components/Icons/Profile.svg" alt="" />
            <p>Profile</p>
          </Link>
        </Anchor>
        <Anchor onClick={handleUnavailable}>
          <Link>
            <img src="/src/Components/Icons/More.svg" alt="" />
            <p>More</p>
          </Link>
        </Anchor>
        <Button $post>
          <p>Post</p>
          <span class="material-symbols-outlined">Draw</span>
        </Button>
        <Popover dp={dp} name={name} username={"@" + username} />
      </SideBarContainer>
    </>
  );
}

const SideBarContainer = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  width: 20%;
  height: 100vh;
  margin-left: 100px;
  border-right: 1px solid #e7e7e7;
  @media (max-width: 430px) {
    position: static;
    width: 15%;
    align-items: center;
    margin: 0px;
  }
`;

const Anchor = styled.div`
  margin-left: 50px;
  margin: 12px;
  font-size: 20px;
  a {
    text-align: center;
    color: black;
    text-decoration: none;
    height: 30px;
    padding: 15px;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    border-radius: 100px;
  }
  a:hover {
    background-color: #f1f1f1;
    border-radius: 50px;
    cursor: pointer;
  }
  a:focus {
    font-weight: 700;
  }
  img {
    text-align: center;
    margin-bottom: -4px;
    margin-right: 10px;
    width: 25px;
    height: 25px;
  }
  .XLogo {
    padding: 15px;
    margin-bottom: -20px;
    border-radius: 100%;
  }
  .XLogo:hover {
    background-color: #f1f1f1;
    border-radius: 100%;
  }
  p {
    all: unset;
  }
  @media (max-width: 430px) {
    width: 6.2vw;
    height: 6.2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      display: none;
    }
    .XLogo {
      margin: 0px;
    }
    .XLogo:hover {
      background: transparent;
    }
    img {
      width: 6.2vw;
      height: 6.2vw;
      margin: 0px 0px -4px 0px;
    }
    a:hover {
      background: transparent;
      cursor: default;
    }
  }
`;
