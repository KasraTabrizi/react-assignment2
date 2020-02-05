import React, { Component } from 'react';
import './Char.css';

const Char = (props) => {
    return (
        <div className="inline-box" onClick={props.click}>{props.letter}</div>
    )
}

export default Char;