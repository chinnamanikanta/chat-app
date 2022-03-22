import React from 'react';
import {BiRightArrowCircle} from 'react-icons/bi'
import { useDispatch } from 'react-redux';
import { changeShowModal } from '../../../../Redux/actions/chatAppActions';
import './style.css'

const AddUserButton = () => {

    const dispatch = useDispatch();

    const handleAddButton = () => {
        changeShowModal(dispatch)
    }

    return (
        <div className="add-user-button-container">
            <button type="button" className="add-user-button" onClick={handleAddButton}>Add User <BiRightArrowCircle size="15px"  style={{
      position: 'relative',
      left: '5px',
      top:"2px"
    }}/> </button>
        </div>
    )

}

export default AddUserButton