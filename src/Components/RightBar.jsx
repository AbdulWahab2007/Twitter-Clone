import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "./Dialog";
import ProfileSuggestion from "./ProfileSuggestion";
import axios from "axios";
import { Link } from "react-router-dom";

export default function RightBar() {
  const [users, setUsers] = useState([]);
  const myID = localStorage.getItem("myID");
  const ShowUsers = () => {
    const response = axios
      .get("http://localhost:5000/api/user/randomuser")
      .then(function (response) {
        const filteredUsers = response.data.filter((user) => user._id !== myID);
        setUsers(filteredUsers);
      });
  };
  useEffect(() => {
    ShowUsers();
  }, []);

  return (
    <>
      <Container>
        <Premium>
          <h3>Subscribe to Premium</h3>
          <p>
            Subscribe to unlock new features and if eligible, receive a share of
            ads revenue.
          </p>
          <div className="btnContainer">
            <Button $SignInNext>Subscribe</Button>
          </div>
        </Premium>
        <FollowSuggestions>
          <div className="top">
            <h3>Who to Follow</h3>
          </div>

          {users.map((element, index) => {
            return (
              <div key={index}>
                <Link className="link" to={"/main/user/" + element.username}>
                  <ProfileSuggestion
                    name={element.additionalData.additionalData.name}
                    username={element.username}
                    dp={element.additionalData.profilePic}
                  />
                </Link>
              </div>
            );
          })}
          <div className="bottom">
            <a href="">Show more</a>
          </div>
        </FollowSuggestions>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: 20px;
  width: 30%;
  height: 100vh;
  @media (max-width: 430px) {
    display: none;
  }
`;

const Premium = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 200px;
  border: 1px solid #e7e7e7;
  margin: 55px 0px 0px 0px;
  border-radius: 20px;
  h3 {
    margin: 30px 0px 0px 20px;
    font-size: 24px;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
  }
  p {
    margin: 15px 0px 0px 20px;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }
  .btnContainer {
    width: 30%;
    margin: -10px 0px 0px 20px;
  }
`;

export const FollowSuggestions = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  border: ${(props) => (props.$search ? "none" : "1px solid #e7e7e7")};
  margin: ${(props) =>
    props.$search ? "10px 0px 0px 0px" : "55px 0px 0px 0px"};
  border-radius: 20px;
  .top {
    display: flex;
    align-items: center;
  }
  h3 {
    margin: 15px 0px 15px 10px;
    font-size: 22px;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
  }
  .bottom {
    display: flex;
    align-items: center;
    border-radius: 0px 0px 20px 20px;
  }
  .bottom:hover {
    background-color: #f9f9f9;
  }
  a {
    margin: 15px 0px 25px 10px;
    text-decoration: none;
    color: #1d9bf0;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }
  .link {
    margin: 0px;
  }
  @media (max-width: 430px) {
    width: 90%;
  }
`;
