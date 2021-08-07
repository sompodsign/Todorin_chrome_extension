import React, {useState} from 'react';
import '../App.css'
import {FiCheck} from 'react-icons/fi';
import {AiOutlineCopy} from 'react-icons/ai';
import {CopyToClipboard} from "react-copy-to-clipboard";


function Card(props) {

    const [isLink, setLink] = useState(false)

    const styles = {
        cardIconRight: {
            fontSize: 18,
            color: 'white',
        },
    }

    const onCopyText = () => {
        console.log('copied to clipboard')
    }


    return (
        <div className="card">
            <div style={{display: 'flex', alignItems: 'center'}}>
                <div className="leftIconContainer"><h4
                    className="cardIconLeft">{props.item.date < 10 ? "0" + props.item.date : props.item.date}</h4></div>
                {props.item.title.startsWith('http') ? <a href={props.item.title} style={{textDecoration: 'none'}} target="_blank"><h3 style={{
                        color: 'aquamarine',
                        fontSize: 13,
                        wordBreak: 'break-all',
                    }}>{props.item.title.slice(0, 22)}</h3>
                    </a> :
                    <h3 style={{
                        color: '#DBE6FD',
                        fontSize: 13,
                        wordBreak: 'break-all'
                    }}>{props.item.title.slice(0, 22)}</h3>
                }

            </div>
            <a href="#">
                <div className="rightIconContainer">
                    {props.item.title.startsWith('http') &&
                    <CopyToClipboard text={props.item.title} onCopy={onCopyText}>
                        <AiOutlineCopy
                            style={{...styles.cardIconRight, ...{marginRight: 3}}}
                        />
                    </CopyToClipboard>
                    }

                    <FiCheck
                        style={styles.cardIconRight}
                        onClick={() => props.deleteItem(props.item.id)}
                    />
                </div>
            </a>
        </div>
    )
}

export default Card
