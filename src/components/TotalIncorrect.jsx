import React from 'react'
import '../App.css';


function TotalIncorrect(props) {
    return (
        <div>
         <h3 className='incorrect'>Incorrect: {props.incorrect}</h3> 
        </div>
    )
}

export default TotalIncorrect;

