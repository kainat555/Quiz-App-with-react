import React from 'react';
import TotalCorrect from './TotalCorrect';
import TotalIncorrect from './TotalIncorrect';
import '../App.css';



function ScoreArea(props) {
    return (
        <div className='scoreWrapper'>
          <TotalCorrect correct={props.correct} />
          <TotalIncorrect incorrect={props.incorrect} />
        </div>
    );
};


export default ScoreArea;
