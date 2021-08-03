import React from 'react';
import '../App.css'


function Card(props) {
    return (
        <div className="cardContainer">
        <h4>{props.item.title}</h4>
        </div>
    )
}

export default Card
