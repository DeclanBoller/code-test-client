import React from 'react';

export default function quizComponent(props) {
  return (
    <div>
      <h1>{props.question}</h1>
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
