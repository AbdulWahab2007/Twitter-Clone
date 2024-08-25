import React, { useContext } from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import RightBar from "./RightBar";
import { Context } from "/src/GlobalContext";
import { BrowserRouter as Router, Navigate, Outlet } from "react-router-dom";

export default function MainSection() {
  const { isLoggedin, setIsLoggedin } = useContext(Context);

  if (!isLoggedin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Main>
        <SideBar />
        <Outlet />
        <RightBar />
      </Main>
    </>
  );
}

const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  @media (max-width: 430px) {
    height: auto;
  }
`;
