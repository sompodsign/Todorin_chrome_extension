
import React from 'react'
import '../App.css'

function Header({ dateItem }) {
    return (
        <div className="header">
            <h3>{`Todorin ${dateItem < 10 ? "0"+dateItem : dateItem}`}</h3>
        </div>
    )
}

export default Header
