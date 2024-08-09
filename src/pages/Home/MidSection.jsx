import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../../components/Dialog";
import axios from "axios";
import { Context } from "/src/GlobalContext";
import { toast } from "sonner";

export default function MidSection() {
  const [isActive, SetisActive] = useState(0);
  const [text, setText] = useState("");
  const [dp, setDp] = useState("/src/components/Icons/UserDP.svg");
  const { token, setToken } = useContext(Context);
  const localtoken = localStorage.getItem("token");
  const handleuserdata = async () => {
    const localusername = localStorage.getItem("username");
    const myresponse = axios
      .get("http://localhost:5000/api/user/?username=" + localusername)
      .then(function (myresponse) {
        setDp(myresponse.data.additionalData.profilePic);
      });
  };
  const handleposttweet = async () => {
    if (text.length != 0) {
      const data = { text };
      const response = await axios
        .post("http://localhost:5000/api/tweet/", data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localtoken,
          },
        })
        .catch(function (error) {
          toast.error(
            "There might be a problem in the server, Try again later!"
          );
        });
      if (response.status == 200) {
        toast.success("Tweet posted successfully!");
        setText("");
      }
    } else {
      toast.error("Textfield should not be empty!");
    }
  };
  const handlenewsfeed = async () => {
    const data = {};
    const response = axios
      .get("http://localhost:5000/api/user/randomuser", data)
      .then(function (response) {});
  };

  useEffect(() => {
    handleuserdata();
  }, []);
  return (
    <>
      <Container>
        <TopCategories>
          <button
            onClick={() => SetisActive(0)}
            className={isActive == 0 ? "Category active" : "Category"}
          >
            For You
          </button>
          <button
            onClick={() => SetisActive(1)}
            className={isActive == 1 ? "Category active" : "Category"}
          >
            Following
          </button>
        </TopCategories>
        <PostSection>
          <div className="top">
            <img className="DP" src={dp} alt="" />
            <textarea
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              placeholder="What is happening?!"
              name=""
              id=""
            ></textarea>
          </div>
          <hr />
          <div className="bottom">
            <div className="ImgContainer">
              <span>
                <img
                  className="TextOpt"
                  src="/src/Components/Icons/Image.svg"
                  alt=""
                />
              </span>
              <span>
                <img
                  className="TextOpt"
                  src="/src/Components/Icons/Gif.svg"
                  alt=""
                />
              </span>
              <span>
                <img
                  className="TextOpt"
                  src="/src/Components/Icons/Poll.svg"
                  alt=""
                />
              </span>
              <span>
                <img
                  className="TextOpt"
                  src="/src/Components/Icons/Emoji.svg"
                  alt=""
                />
              </span>
              <span>
                <img
                  className="TextOpt"
                  src="/src/Components/Icons/Schedule.svg"
                  alt=""
                />
              </span>
              <span>
                <img
                  className="TextOpt"
                  src="/src/Components/Icons/Location.svg"
                  alt=""
                />
              </span>
            </div>
            <div className="btncontainer">
              <Button $post1 onClick={handleposttweet}>
                <p>Post</p>
                <span className="material-symbols-outlined">Draw</span>
              </Button>
            </div>
          </div>
        </PostSection>
        <div className="PostContainer">{/* Postcards here */}</div>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 40%;
  height: 100vh;
  margin-left: 397px;
  border-right: 1px solid #e7e7e7;
  display: flex;
  flex-direction: column;
  align-items: center;
  .PostContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  }
  @media (max-width: 430px) {
    margin: 0vw 0vw 0vw 15%;
    width: 85%;
  }
`;

export const TopCategories = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  border-bottom: 1px solid #e7e7e7;
  .Category {
    width: 50%;
    height: 55px;
    border: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    color: #536471;
    user-select: none;
    background-color: white;
  }
  .Category:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
  .active {
    color: black;
    font-weight: 700;
    border-bottom: 3px solid #1d9bf0;
  }
  @media (max-width: 430px) {
    height: 12vw;
    .Category {
      height: 12vw;
      font-size: 3.5vw;
    }
  }
`;

const PostSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid #e7e7e7;
  .top {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .DP {
    width: 45px;
    height: 45px;
    border-radius: 100px;
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
  hr {
    width: 85%;
    height: 1px;
    background-color: #e7e7e7;
    border: 0px;
  }
  .bottom {
    display: flex;
    align-items: center;
    width: 100%;
    height: 55px;
  }
  .ImgContainer {
    display: flex;
    margin-left: 45px;
    width: 75%;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
  }
  span:hover {
    cursor: pointer;
    border-radius: 60px;
    background-color: #e7fdfd;
  }
  .TextOpt {
    width: 25px;
  }
  .btncontainer {
    width: 25%;
  }
  @media (max-width: 430px) {
    .DP {
      width: 10vw;
      height: 10vw;
      margin: 0px 0px 0px 2vw;
    }
    textarea {
      margin: 4vw 2vw 0px 2vw;
      font-size: 5vw;
      height: 14vw;
    }
    .bottom {
      height: 15vw;
    }
    .ImgContainer {
      margin-left: 15vw;
    }
    span {
      width: 8vw;
      height: 8vw;
    }
    .TextOpt {
      width: 5vw;
    }
  }
`;
