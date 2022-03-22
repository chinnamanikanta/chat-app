import React from 'react';
import './style.css'
const UserSubmitButton = (props) => {

const {handleSubmit} = props

    return (
        <div>
            <button type="submit" className="add-user-button-submit" onClick={() => handleSubmit()}>Submit</button>
        </div>
    )

}

export default UserSubmitButton