import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import { toast } from "sonner";

export const Context = createContext();
export default function Provider(props) {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [loginusername, setloginUsername] = useState("");
  const [myDP, setMyDp] = useState("/src/Components/Icons/UserDP.svg");
  if (token.length != 0) {
    localStorage.setItem("token", token);
  }
  if (name.length != 0) {
    localStorage.setItem("name", name);
  }
  const handleMyData = async () => {
    const myresponse = axios
      .get(
        "http://localhost:5000/api/user/?username=" +
          localStorage.getItem("name")
      )
      .then(function (myresponse) {
        setMyDp(myresponse.data.additionalData.profilePic);
      });
  };
  const handletoken = () => {
    if (localStorage.getItem("token") != null) {
      setIsLoggedin(true);
    }
  };
  useEffect(() => {
    handletoken();
    handleMyData();
  }, []);
  const handleUnavailable = () => {
    toast.info("This feature is currently UnAvailable");
  };
  return (
    <Context.Provider
      value={{
        myDP,
        isLoggedin,
        setIsLoggedin,
        token,
        setToken,
        handleUnavailable,
        loginusername,
        setloginUsername,
        name,
        setName,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
