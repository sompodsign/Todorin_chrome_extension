import React from 'react'
import '../App.css'
import { MdSend } from 'react-icons/md';

function GoalInput() {

    return (
        <div className="inputContainer">
            <input className="inputStyle" type="text" placeholder="Type Here"></input>
            <a href="#"><MdSend className="sendIconStyle"/></a>
        </div>
    )
}

export default GoalInput
