import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button } from './Dialog'
import ProfileSuggestion from './ProfileSuggestion'
import axios from 'axios';

export default function RightBar() {
    const [users, setUsers] = useState([]);
    const ShowUsers = () => {
        const response = axios.get("http://localhost:5000/api/user/randomuser").then(function (response) {
            setUsers(response.data)
        })
    }
    useEffect(() => {
        ShowUsers()
    }, [])


    return (
        <>
            <Container>
                <Premium>
                    <h3>Subscribe to Premium</h3>
                    <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
                    <div className="btnContainer">
                        <Button $SignInNext>Subscribe</Button>
                    </div>
                </Premium>
                <FollowSuggestions>
                    <div className="top">
                        <h3>Who to Follow</h3>
                    </div>

                    {users.map((element, index) => {
                        return <ProfileSuggestion key={index} name={element.username} email={element.email} />

                    })}
                    {/* <ProfileSuggestion name="Wahab" />
                    <ProfileSuggestion name="Wahab" />
                    <ProfileSuggestion name="Wahab" /> */}
                    <div className="bottom">
                        <a href="">Show more</a>
                    </div>
                </FollowSuggestions>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    right: 20px;
    width: 30%;
    height: 100vh;
`

const Premium = styled.div`
        display: flex;
        flex-direction: column;
        width: 80%;
        height: 200px;
        border: 1px solid #e7e7e7;
        margin: 55px 0px 0px 0px;
        border-radius: 20px;
        h3{
            margin: 30px 0px 0px 20px;
            font-size: 24px;
            font-family: "Roboto Slab", serif;
            font-optical-sizing: auto;
            font-weight: 900;
            font-style: normal;
        }
        p{
            margin: 15px 0px 0px 20px;
            font-family: "Montserrat", sans-serif;
            font-optical-sizing: auto;
            font-weight: 500;
            font-style: normal;
        }
        .btnContainer{
            width: 30%;
            margin: -10px 0px 0px 20px;
        }
`

const FollowSuggestions = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    border: 1px solid #e7e7e7;
    margin: 55px 0px 0px 0px;
    border-radius: 20px;
    .top{
        display: flex;
        align-items: center;
    }
    h3{
        margin: 15px 0px 15px 10px;
        font-size: 22px;
        font-family: "Roboto Slab", serif;
        font-optical-sizing: auto;
        font-weight: 900;
        font-style: normal;
    }
    .bottom{
        display: flex;
        align-items: center;
        border-radius: 0px 0px 20px 20px;
    }
    .bottom:hover{
        background-color: #f9f9f9;
    }
    a{
        margin: 15px 0px 25px 10px;
        text-decoration: none;
        color: #1D9BF0;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;

    }
`