import React, { useContext } from "react";
import styled from "styled-components";
import SignUpButton from "/src/components/SignUpButton";
import SignInButton from "/src/components/SignInButton";
import { Button } from "/src/components/Dialog";
import { Context } from "/src/GlobalContext";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";

export default function WelcomePage() {
  const { isLoggedin, setIsLoggedin, handleUnavailable } = useContext(Context);
  if (isLoggedin) {
    return <Navigate to="/main/home" />;
  }
  return (
    <>
      <Main>
        <WCContainer>
          <LeftContainer>
            <img src="/src/Components/Icons/XLogo.png" />
          </LeftContainer>
          <RightContainer>
            <h1>Happening now</h1>
            <ButtonsContainer>
              <h2>Join today.</h2>
              <Button onClick={handleUnavailable}>
                <img
                  className="Logo"
                  src="https://seeklogo.com/images/G/google-logo-28FA7991AF-seeklogo.com.png"
                />
                Signup with Google
              </Button>
              <Button onClick={handleUnavailable}>
                <img
                  className="Logo"
                  src="https://seeklogo.com/images/A/apple-logo-E3DBF3AE34-seeklogo.com.png"
                />
                Signup with Apple
              </Button>

              <HRcontainer>
                <hr />
                <p>or</p>
                <hr />
              </HRcontainer>
              <SignUpButton />
              <p>
                By signing up, you agree to the{" "}
                <a href="https://twitter.com/en/tos" target="_blank">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="https://twitter.com/en/privacy" target="_blank">
                  Privacy Policy
                </a>
                , including{" "}
                <a
                  href="https://help.twitter.com/en/rules-and-policies/x-cookies"
                  target="_blank"
                >
                  Cookie Use
                </a>
                .
              </p>
              <h3>Already have an account?</h3>
              <SignInButton />
            </ButtonsContainer>
          </RightContainer>
        </WCContainer>
        <WCFooter>
          <Anchors>
            <a target="_blank" href="https://about.twitter.com/en">
              About
            </a>
            <a
              target="_blank"
              href="https://help.twitter.com/en/using-x/download-the-x-app"
            >
              Download the X app
            </a>
            <a target="_blank" href="https://help.twitter.com/en">
              Help Center
            </a>
            <a target="_blank" href="https://twitter.com/en/tos">
              Terms of Srevice
            </a>
            <a target="_blank" href="https://twitter.com/en/privacy">
              Privacy Policy
            </a>
            <a
              target="_blank"
              href="https://help.twitter.com/en/rules-and-policies/x-cookies"
            >
              Cookie Policy
            </a>
            <a
              target="_blank"
              href="https://help.twitter.com/en/resources/accessibility"
            >
              Accessibility
            </a>
            <a
              target="_blank"
              href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo"
            >
              Ads info
            </a>
            <a target="_blank" href="https://blog.twitter.com">
              Blog
            </a>
            <a target="_blank" href="https://careers.twitter.com/en">
              Careers
            </a>
            <a
              target="_blank"
              href="https://about.twitter.com/en/who-we-are/brand-toolkit"
            >
              Brand Resources
            </a>
            <a
              target="_blank"
              href="https://ads.twitter.com/?ref=gl-tw-tw-twitter-advertise"
            >
              Advertising
            </a>
            <a target="_blank" href="https://business.twitter.com">
              Marketing
            </a>
            <a
              target="_blank"
              href="https://business.twitter.com/?ref=web-twc-ao-gbl-twitterforbusiness&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=twitterforbusiness"
            >
              X for Business
            </a>
            <a target="_blank" href="https://developer.twitter.com/en">
              Developers
            </a>
            <a target="_blank" href="https://twitter.com/i/directory/profiles">
              Directory
            </a>
            <a
              target="_blank"
              href="https://twitter.com/settings/account/personalization"
            >
              Settings
            </a>
          </Anchors>
          <a href="/">© 2024 X Corp.</a>
        </WCFooter>
      </Main>
    </>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const WCContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 92vh;
  img {
    width: 300px;
    height: 300px;
    user-select: none;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  width: 40%;
  height: 92vh;
  h1 {
    font-size: 70px;
    margin: 100px 0px 0px 0px;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
  }
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 50%;
  height: 92vh;

  h2 {
    font-size: 35px;
    margin: 0px 0px 20px 0px;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }
  a {
    text-decoration: none;
    color: #1d9bf0;
  }
  a:hover {
    text-decoration: underline;
  }
  p {
    margin-bottom: 5px;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }
  h3 {
    margin-bottom: 15px;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
  }
`;

export const HRcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  hr {
    width: 50%;
    height: 2px;
    background-color: #bcbcbc;
    border: 0px;
  }
  p {
    margin: 0px 5px 0px 5px;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }
`;

const WCFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 8vh;
  margin-bottom: 20px;
  a {
    color: black;
    font-size: 12px;
    text-decoration: none;
    margin-right: 19px;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const Anchors = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
`;
