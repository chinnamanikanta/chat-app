import React from 'react'
import './style.css'

const InputComponent = (props) => {
    const {handleChange, userValue} = props

    return (
        <div className="input-container">
            <label style={{fontSize:"20px"}}>Enter User Name :</label>
            <input type="text" className="input-style" placeholder="User Name" onChange={(e) => handleChange(e)} value={userValue}/>
        </div>
    )

}

export default InputComponent