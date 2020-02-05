import React, { Component } from 'react';

const Validation = (props) => {
    if (props.lengthValue > 5) {
        return <div><p>Text too long</p></div>
    }
    else {
        return <div><p>Text too short</p></div>
    }
}

export default Validation;