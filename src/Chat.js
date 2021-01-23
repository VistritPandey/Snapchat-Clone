import { Avatar } from '@material-ui/core'
import { StopRounded } from '@material-ui/icons'
import React from 'react'
import "./Chat.css"

function Chat({id, profilePic, username, timestamp, imageUrl, read}) {
    return (
        <div className="chat">
            <Avatar className="chat__avatar" src={profilePic} />
            <div className="chat__info">
                <h4>{username}</h4>
                <p>Tap to view.. {new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>
            {!read && <StopRounded className="chat__readIcon"/>}
        </div>
    )
}

export default Chat
