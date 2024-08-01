import React from "react";
import * as Popover from "@radix-ui/react-popover";
import styled from "styled-components";
import GlobalCSS from "/src/GlobalCSS";
import "@radix-ui/colors/black-alpha.css";
import "@radix-ui/colors/mauve.css";
import "@radix-ui/colors/violet.css";

export default function PopoverTag(props) {
  const handlelogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <Popover.Root>
      <GlobalCSS />
      <Popover.Trigger asChild>
        <IconButton className="IconButton" aria-label="Update dimensions">
          <div className="left">
            <img className="DP" src={props.dp} alt="" />
            <div className="Names">
              <h3>
                {props.name}
                <img className="lock" src="/src/Components/Icons/Lock.svg" />
              </h3>
              <p>{props.username}</p>
            </div>
          </div>
          <div className="right">
            <img src="/src/Components/Icons/More.svg" alt="" />
          </div>
        </IconButton>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={5}>
          <div className="optContainer">
            <div className="opt">
              <p>Add an existing account</p>
            </div>
            <div className="opt" onClick={handlelogout}>
              <p>Log out {props.username}</p>
            </div>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export const IconButton = styled.button`
  font-family: inherit;
  border-radius: ${(props) => (props.$suggestion ? "0px" : "80px")};
  height: 65px;
  width: 100%;
  margin-top: ${(props) => (props.$suggestion ? "5px" : "35px")};
  margin-left: ${(props) => (props.$suggestion ? "0px" : "-10px")};
  margin-right: 0px;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0px;
  background-color: white;
  &:focus {
    box-shadow: 0 0 0 2px rgb(138, 138, 138);
  }
  &:hover {
    background-color: ${(props) => (props.$suggestion ? "#f9f9f9" : "#f1f1f1")};
    cursor: pointer;
  }
  .left {
    display: flex;
  }
  .right {
    display: flex;
    width: 25%;
  }
  .DP {
    width: 45px;
    height: 45px;
    margin: 0px 10px 0px 0px;
    border-radius: 100px;
  }
  .Names {
    display: flex;
    flex-direction: column;
    justify-content: center;
    h3 {
      display: flex;
      margin: 0px;
      font-size: 18px;
      font-family: "Roboto Slab", serif;
      font-optical-sizing: auto;
      font-weight: 600;
      font-style: normal;
    }
    h3:hover {
      text-decoration: ${(props) => (props.$suggestion ? "underline" : "none")};
    }
    p {
      margin: ${(props) =>
        props.$suggestion ? "0px 0px 0px -25px" : "0px 0px 0px -55px"};
      font-size: 14px;
      font-family: "Montserrat", sans-serif;
      font-optical-sizing: auto;
      font-weight: 500;
      font-style: normal;
      color: #565656;
    }
    .lock {
      margin: 0px 0px 0px 5px;
      width: 20px;
      height: 20px;
    }
  }
  img {
    text-align: center;
    margin: 0px 0px -4px 10px;
    width: 22px;
    height: 22px;
  }
  @media (max-width: 430px) {
    margin: 5vw 2vw 0vw 2vw;
    width: 12vw;
    height: 12vw;
    border-radius: 100px;
    justify-content: center;
    .Names {
      display: none;
    }
    .DP {
      margin: 0px;
      width: 12vw;
      height: 12vw;
    }
    .right {
      display: none;
    }
  }
`;
