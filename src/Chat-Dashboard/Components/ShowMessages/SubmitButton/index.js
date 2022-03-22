import React from 'react';
import {FiSend} from "react-icons/fi"
import './style.css'

const SendButton = (props) => {
const {handleSendMessage} = props
    return(
        <div>
        <button type="submit" className="submit-class" onClick={() =>handleSendMessage()}>Send <FiSend /></button>
    </div>
    )

}

export default SendButton