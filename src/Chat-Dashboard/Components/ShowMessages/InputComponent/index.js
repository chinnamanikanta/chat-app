import React from 'react';
import './style.css'

const MessageInputComponent = (props) => {

    const{handleMessage,message} = props

    return(
        <div>
            <input className="message-input-box" type="text" placeholder="Type Something...." onChange={(e) => handleMessage(e)} value={message}/>
        </div>
    )

}

export default MessageInputComponent