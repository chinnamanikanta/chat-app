import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddUserModel from './AddUserModel';
import ShowMessages from './ShowMessages';
import './style.css'
import UsersList from './UsersList';

//main Chat Dashboard
const ChatDashboard = () => {
    
    const isModalShow = useSelector((state) => state.userReducer.isShowModal);   
    const user = useSelector((state) => state.userReducer.user);
    

    return (
        <div className="main">
            <div className="dashboard">
                <UsersList/>
                <ShowMessages />
                {
                    isModalShow && <AddUserModel />
                }
            </div>



        </div>
    )

}

export default ChatDashboard