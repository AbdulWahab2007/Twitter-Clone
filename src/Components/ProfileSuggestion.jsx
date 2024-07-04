import React from 'react'
import { IconButton } from './ProfilePopover'
import { Button } from './Dialog'

export default function ProfileSuggestion(props) {
    const email = `${props.email.substring(0, 19)}...`;
    return (
        <>
            <IconButton $suggestion className="IconButton" aria-label="Update dimensions">
                <div className="left">
                    <img className='DP' src='/src/Components/Icons/UserDP.svg' alt='' />
                    <div className="Names">
                        <h3>{props.name}</h3>
                        <p>{email}</p>
                    </div>
                </div>
                <div className="right">
                    <Button $follow>Follow</Button>
                </div>

            </IconButton>
        </>
    )
}
