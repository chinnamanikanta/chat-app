import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, fectUsersDataFromApi, setCurrentUser } from '../../Redux/actions/chatAppActions';
import AddUserButton from './Buttons/AddUserButton/Button'
import {FiUser, FiTrash} from 'react-icons/fi';
import './style.css'

const UsersList = () => {

    useEffect(() => {
        fectUsersDataFromApi(dispatch);
    }, []);

  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
 

    return (
        <div className="users-list-contanier">
            <div className="users-list-header">
                <div className="user-title">Users</div>
                    <AddUserButton/>
            </div>

            <div className="users-list">
                {
                    users.map((user) => {
                        return (
                            <div key={user.id} className="each-user" onClick={() => setCurrentUser(dispatch, user.id)}>
                                <div><FiUser
                                size="25px"  
                                style={{color:"#005757" }}
                                /></div>
                                <div className="user-name">{user.name}</div>
                                <div className="delete-icon"><FiTrash
                                size="20px" 
                                style={{color:"red" }}
                               
                                /></div>
                                </div>
                        )
                    })
                }

            </div>


        </div>
    )

}

export default UsersList