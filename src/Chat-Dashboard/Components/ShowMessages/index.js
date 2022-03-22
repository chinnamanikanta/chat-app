import React, { useState } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { FaUserCircle } from "react-icons/fa";

import './style.css'
import MessageInputComponent from './InputComponent';
import SubmitButton from './SubmitButton';
import SendButton from './SubmitButton';
import { saveMessage } from '../../Redux/actions/chatAppActions';

const ShowMessages = () => {
    const [msg,setMsg] = useState("")
    const dispatch = useDispatch()
    
    const user = useSelector((state) => state.userReducer.user);


    const handleMessage = (e) => {
        setMsg(e.target.value)

    }



    const handleSendMessage = () => {
        if(msg === "") {
            alert("Please type something!!!...")
            return;
        }
        const message = {message:msg}
        saveMessage(dispatch,message)
        setMsg("")

    }

    return (
        <div className="show-messages-container">
            <div className="message-header">
                <div className="message-title">Chat Messages</div>
            </div>
            <div className="display-container">
        
        {user.messages && user.messages.length > 0 && user.messages !== undefined ? (user.messages.map(({id,message}) => {
                    return(
                        <div key={id} className="each-message">
                                 <div><FaUserCircle size={38} style={{marginLeft:"30px"}}/></div> 
                            <div className="message-name">{message}</div>
                            </div> 
                       
                    )

                })
               ) : (<div className="No-messages">No Messages</div>)
            }

            </div>
            <div>
                <div className="footer">NewMessage <span className="line"></span></div>
            </div>
            <div className="footer-section">
                <MessageInputComponent  handleMessage={handleMessage} message={msg}/>
                <SendButton handleSendMessage={handleSendMessage}/>
            </div>

            
            
                       
                

        </div>
    )
}
export default ShowMessages