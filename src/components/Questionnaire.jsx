import React, { Component } from 'react'
import dataSet from '../api/dataSet';
import QuizArea from './QuizArea';
import ScoreArea from './ScoreArea';
import '../App.css';


class Questionnaire extends Component {

    constructor() {
        super();
        this.state = {
            current: 0,
            dataSet: dataSet,
            correct: 0,
            incorrect: 0,
            isFinished: false
        };
        this.handleClick=this.handleClick.bind(this)
    }

    // remarks = () => {
    //     if (this.state.correct >= 3) {
    //         return (
    //             <h2> You are Passed</h2>
    //         )
    //     } else {
    //         return (
    //             <h2> You are Failed</h2>
    //         )
    //     }
    // }


    handleClick(choice){

        if (choice === this.state.dataSet[this.state.current].correct) {
            this.setState({
                correct: this.state.correct + 1
            })
        }
        else {
            this.setState({
                incorrect: this.state.incorrect + 1
            })
        }

        if (this.state.current === this.state.dataSet.length - 1) {
            this.setState({
                isFinished: true
            })
        }
        else {
            this.setState({
                current: this.state.current + 1
            })
        }  
    }
    
    render() {
        return (
            <div className='quiz'>
                <QuizArea remarks={this.state.correct} handleClick={this.handleClick} score={this.state.correct}
                isFinished={this.state.isFinished}
                    dataSet={this.state.dataSet[this.state.current]} />
                <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect} />
            </div>
        )
    }
}

export default Questionnaire;
