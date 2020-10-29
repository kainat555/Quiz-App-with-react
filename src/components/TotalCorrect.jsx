import React from 'react';
import '../App.css';


function TotalCorrect(props) {
    return (
        <div>
         <h3 className='correct'>Correct: {props.correct}</h3>
        </div>
    )
}

export default TotalCorrect;