import React from 'react';
import '../App.css';

function Question(props) {
    return (
        <div>
            <h1 className='question'>{props.dataSet.question}</h1>
        </div>
    )
}

export default Question

