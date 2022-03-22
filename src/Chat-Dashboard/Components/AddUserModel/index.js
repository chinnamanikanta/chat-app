import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { changeShowModal, saveUser } from '../../Redux/actions/chatAppActions';
import { modalStyles } from '../../Utils/helpers';
import { FiUserPlus, FiX } from 'react-icons/fi';
import './style.css'
import InputComponent from './InputComponent';
import UserSubmitButton from './AddButton';

const AddUserModel = () => {
    const [userInput,setUserInput] = useState("")
    const dispatch = useDispatch()
    const isModalShow = useSelector((state) => state.userReducer.isShowModal); 

 
    
    const handleInputChange = (e) => {
        setUserInput(e.target.value)
      

    }

    const handleSubmit = () => {
        if(userInput === "") {
            alert("Please Enter User Name")
            return;
        }

        const newUser = {
            id:UserSubmitButton.length + 1,
            name:userInput,
            messages:[]
        }

        saveUser(dispatch,newUser)
        changeShowModal(dispatch)
        setUserInput("")

    }

    const handleCloseModal = () => {
    changeShowModal(dispatch)

 }
  
  return (
      <div>
          <Modal
          isOpen={isModalShow}
          onRequestClose={handleCloseModal}
          style={modalStyles}
          >
        <div className="container">   
         <div className="adding-user-header">
            <h2 className="h2-header">ADDING USER</h2>
             <div className="close-icon" onClick={handleCloseModal}>
                 <FiX size={30}/>

             </div>


         </div>
         <div className="user-icon">
             <FiUserPlus size={60} style={{color:"#1FC516"}}/>
         </div>

         <div>
             <InputComponent handleChange={handleInputChange} userValue={userInput}/>
             <UserSubmitButton handleSubmit={handleSubmit}/>
         </div>




         


              </div>

          </Modal>


      </div>
  )

}

export default AddUserModel