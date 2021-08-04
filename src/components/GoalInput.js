import React, { useState } from 'react'
import '../App.css'
import { MdSend } from 'react-icons/md';

function GoalInput({ addHandler }) {

    const [title, setTitle] = useState("");

    const pressHandler = (title) => {
        if (title) {
            addHandler(title);
            setTitle("");
        } else {
            console.log("field is empty")
        }
    };

    return (
        <div className="inputContainer">
            <input
                className="inputStyle"
                autoFocus 
                type="text"
                placeholder="Type Here"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                onKeyDown={(e) => e.key === 'Enter' && pressHandler(title)}
            >
            </input>
            <a href="#" onClick={() => pressHandler(title) }><MdSend className="sendIconStyle" /></a>
        </div>
    )
}

export default GoalInput
