import React, { useState } from 'react'
import styled from 'styled-components'
import * as styles from '/src/components/Dialog'
import { Link } from 'react-router-dom';
import ProfileSuggestion from '../../components/ProfileSuggestion';
import { FollowSuggestions } from '../../components/RightBar';
import axios from 'axios';

export default function Search() {
    const [searchItems, setSearchitems] = useState([])
    const handlesearch = async event => {
        const response = axios.get("http://localhost:5000/api/user/search?q=" + event.target.value).then(function (response) {
            setSearchitems(response.data)
        })
    }
    return (
        <>
            <Container>
                <styles.Input $search onChange={handlesearch} type="text" placeholder='Search users...' />
                <FollowSuggestions $search>
                    {searchItems.map((element, index) => {
                        return <div key={index}>
                            <Link className='link' to={"/main/user/" + element.username}>
                                <ProfileSuggestion name={element.username} email={element.email} />
                            </Link>
                        </div>

                    })}
                </FollowSuggestions>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 40%;
    height: 100vh;
    margin-left: 397px;
    border-right: 1px solid #e7e7e7;
    display: flex;
    flex-direction: column;
    align-items: center;
`