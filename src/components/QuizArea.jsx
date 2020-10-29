import React from 'react'
import Question from './Question';
import AnswerList from './AnswerList';
import UserGreeting from './UserGreeting';
import '../App.css';



function QuizArea(props) {
  if (props.isFinished) {
    return <UserGreeting remarks={props.remarks}/>
  }

  return (
    <div>
      {/* <h2> QuizArea </h2> */}
      <Question dataSet={props.dataSet} />
      <AnswerList handleClick={props.handleClick} dataSet={props.dataSet} />
    </div>
  )
}

export default QuizArea;
