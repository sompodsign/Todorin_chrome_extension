import React from 'react';
import '../App.css'
import { FiCheck } from 'react-icons/fi';

function Card(props) {

    const styles = {
        cardIconRight: {
            fontSize: 18,
            color: 'white',
        },
    }

    return (
        <div className="card">
            <div style={{ display: 'flex', alignItems: 'center'}}>
                <div className="leftIconContainer"><h4 className="cardIconLeft">{props.item.date < 10 ? "0" + props.item.date : props.item.date}</h4></div>
                <h3 style={{ color: '#DBE6FD', fontSize: 13 }}>{props.item.title}</h3>
            </div>
            <a href="#"><div className="rightIconContainer"><FiCheck
                style={styles.cardIconRight}
                onClick={() => props.deleteItem(props.item.id)}
            /></div></a>
        </div>
    )
}

export default Card