import React from 'react';
import Question from '../components/question';

export default function quizComponent(props) {
  return (
    <div>
      <h3> <Question content={props.question} /> </h3>
      {
        props.answers.map((v, i) => {
          return (
            <div className="answers" key={i}>
              <label>
                <input type="radio" name={v} value={v} />
                {v}
              </label>
            </div>
          )
        })
      }
      <button onClick={props.lastQuestion}>Previous Question</button>
      <button onClick={props.nextQuestion}>Next Question</button>
    </div>
  )
}
