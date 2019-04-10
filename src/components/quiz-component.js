import React from 'react';
import Answers from '../components/answers';

export default function quizComponent(props) {
  return (
    <div>
      <h3> Question {props.counter} / {props.total} </h3>
      <h3>{props.question}</h3>

      <Answers answers={props.answers} />

      <button onClick={props.nextQuestion}>{props.counter === props.total ? 'Finish quiz' : 'Next question'}</button>
    </div>
  )
}
