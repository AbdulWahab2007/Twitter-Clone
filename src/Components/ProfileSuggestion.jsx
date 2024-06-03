import React from 'react'
import { IconButton } from './ProfilePopover'
import { Button } from './Dialog'

export default function ProfileSuggestion() {
    return (
        <>
            <IconButton $suggestion className="IconButton" aria-label="Update dimensions">
                <div className="left">
                    <img className='DP' src='/src/Components/Icons/UserDP.svg' alt='' />
                    <div className="Names">
                        <h3>Demo Name</h3>
                        <p>@DemoUsername0011</p>
                    </div>
                </div>
                <div className="right">
                    <Button $follow>Follow</Button>
                </div>

            </IconButton>
        </>
    )
}
