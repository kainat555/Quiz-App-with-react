import React from 'react'
import '../App.css';


function UserGreeting(props) {

    return (
        <div>
            <h1 className='userGreeting'>Thank you for completing questionnaire !! <br/>
            {props.remarks >= 3 ? 'You are Passed' : 'You are Failed'}</h1>
        </div>
    );
};

export default UserGreeting
