import React, { useState } from "react";
import styled from "styled-components";
import { Top } from "../Replies/PostReplies";
import { Link } from "react-router-dom";
import * as styles from "/src/components/Dialog.jsx";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const [isloading, setIsloading] = useState("none");
  const [dp, setDp] = useState(null);
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [bio, setBio] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [weblink, setWebLink] = useState("");
  const [dob, setDob] = useState("");
  const localtoken = localStorage.getItem("token");
  const navigate = useNavigate();
  if (name.length > 0) {
    localStorage.setItem("name", name);
  }
  const handleSave = async () => {
    setIsloading("block");
    if (
      bio.length > 1 &&
      name.length <= 14 &&
      location.length >= 4 &&
      dob.length >= 8
    ) {
      if (dp && coverPhoto) {
        const data = {
          additionalData: {
            name: name,
            bio: bio,
            location: location,
            website: weblink,
            dob: dob,
          },
        };
        const response = await axios.post(
          "http://localhost:5000/api/user/editprofile",
          data,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localtoken,
            },
          }
        );
        if (response.status == 200) {
          toast.success("Info updated successfully");
          if (!dp && !coverPhoto) {
            navigate("/main/profile");
          }
        }
      } else {
        toast.error("Please select images!");
        setIsloading("none");
      }
    } else {
      setIsloading("none");
      if (!dp && !coverPhoto) {
        toast.error(
          "Some of your data is missing OR Invalid, Please check again"
        );
      }
    }
    if (dp && coverPhoto) {
      setIsloading("block");
      let formData = new FormData();
      formData.append("image", dp);
      formData.append("type", "Profile");
      const response = await axios.post(
        "http://localhost:5000/api/user/upload",
        formData,
        {
          headers: {
            Authorization: "Bearer " + localtoken,
          },
        }
      );
      let formData2 = new FormData();
      formData2.append("image", coverPhoto);
      formData2.append("type", "Cover");
      const response2 = await axios.post(
        "http://localhost:5000/api/user/upload",
        formData2,
        {
          headers: {
            Authorization: "Bearer " + localtoken,
          },
        }
      );
      if (response.status == 200 || response2.status == 200) {
        toast.success("Image changed");
        navigate("/main/profile");
      }
    } else {
      toast.error("Please select both images");
    }
  };

  return (
    <>
      <Container>
        <Top>
          <Link to="/main/home" className="Home">
            <span className="SpanBack">
              <span className="material-symbols-outlined back">
                arrow_left_alt
              </span>
            </span>
          </Link>
          <h3 className="heading">Setup your Profile</h3>
        </Top>
        <Bottom>
          <h1>Choost your profile picture</h1>
          <input
            onChange={(e) => {
              setDp(e.target.files[0]);
            }}
            className="inputFile"
            type="file"
            accept="image/*"
          />
          <span className="material-symbols-outlined dp">edit</span>
          <p>Selected File: {dp ? dp.name : "None"}</p>
          <h1>Choost your Cover Photo</h1>
          <input
            onChange={(e) => {
              setCoverPhoto(e.target.files[0]);
            }}
            className="inputFile"
            type="file"
            accept="image/*"
          />
          <span className="material-symbols-outlined cover">edit</span>
          <p>Selected File: {coverPhoto ? coverPhoto.name : "None"}</p>
          <h1>Write your Bio</h1>
          <div className="inputContainer">
            <styles.Input
              $editpage
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
              type="text"
            />
          </div>
          <h1>Write your full name</h1>
          <p>&#40; maximum 14 characters &#41;</p>
          <div className="inputContainer">
            <styles.Input
              $editpage
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
            />
          </div>
          <h1>Tell us yout Location</h1>
          <p>&#40; country &#41;</p>
          <div className="inputContainer">
            <styles.Input
              $editpage
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              type="text"
            />
          </div>
          <h1>Your Date Of Birth</h1>
          <p>&#40; DD MM YYYY &#41;</p>
          <div className="inputContainer">
            <styles.Input
              $editpage
              value={dob}
              onChange={(e) => {
                setDob(e.target.value);
              }}
              type="date"
            />
          </div>
          <h1>Any personal web link</h1>
          <p>&#40; optional &#41;</p>
          <div className="inputContainer">
            <styles.Input
              $editpage
              value={weblink}
              onChange={(e) => {
                setWebLink(e.target.value);
              }}
              type="text"
            />
          </div>
          <div className="btnContainer">
            <styles.Button $follow onClick={handleSave}>
              <p className="savetext">Save Changes</p>
              <span class="material-symbols-outlined save">save</span>
            </styles.Button>
            <div style={{ display: isloading }} className="loader"></div>
          </div>
        </Bottom>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h1 {
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    font-size: 24px;
    margin: 6px 0px 6px 22px;
  }
  p {
    margin: 0px 0px 0px 22px;
    color: #565656;
  }
  .inputFile {
    margin: 6px 0px 6px 22px;
    width: 100px;
    border-radius: 100px;
  }
  input::file-selector-button {
    background-color: white;
    color: white;
    font-weight: bold;
    border: 1px solid #1d9bf0;
    width: 100px;
    height: 100px;
    border-radius: 100px;
    cursor: pointer;
    margin: 0px 20px 0px 0px;
  }
  span {
    color: #1d9bf0;
    font-size: 60px;
    position: absolute;
    cursor: pointer;
    pointer-events: none;
  }
  .savetext {
    all: unset;
  }
  .save {
    color: white;
  }
  .dp {
    top: 128px;
    left: 44px;
  }
  .cover {
    top: 302px;
    left: 44px;
  }
  .inputContainer {
    display: flex;
    margin: 0px 0px 6px 22px;
    width: 40%;
  }
  .btnContainer {
    display: flex;
    width: 14%;
    margin: 0px 0px 6px 22px;
  }
  .loader {
    margin: 0px 0px 0px 0px;
    width: 30px;
    padding: 11px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: #1d9bf0;
    --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
    -webkit-mask: var(--_m);
    mask: var(--_m);
    -webkit-mask-composite: source-out;
    mask-composite: subtract;
    animation: l3 1s infinite linear;
  }
  @keyframes l3 {
    to {
      transform: rotate(1turn);
    }
  }
  @media (max-width: 430px) {
    h1 {
      font-size: 4vw;
      margin: 1.2vw 0vw 1.2vw 5.2vw;
    }
    p {
      font-size: 2.8vw;
      margin: 0px 0vw 0vw 5.2vw;
    }
    .savetext {
      display: none;
    }
    .inputFile {
      margin: 1.2vw 0px 1.2vw 5.2vw;
      width: 18vw;
      border-radius: 100px;
    }
    input::file-selector-button {
      width: 18vw;
      height: 18vw;
      margin: 0px 5vw 0px 0px;
    }
    span {
      font-size: 9vw;
    }
    .inputContainer {
      display: flex;
      margin: 0px 0px 1.2vw 5.2vw;
      width: 60%;
    }
    .btnContainer {
      align-items: center;
      width: 100%;
    }
    .dp {
      top: 27.3vw;
      left: 10vw;
    }
    .cover {
      top: 59.2vw;
      left: 10vw;
    }
    .loader {
      position: static;
      width: 5vw;
      height: 5vw;
      padding: 4px;
    }
  }
`;
