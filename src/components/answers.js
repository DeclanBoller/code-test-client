import React from 'react';

export default function answers({ answers, checkAnswer, classNames }) {
  return (
    <div id="answers">
      {
        answers.map((v, i) => {
          return (
            <ul id="answers" key={i}>
              <li
                onClick={checkAnswer}
                className={classNames[i]}
                data-value={v}
                data-id={i}>
                <span> {v} </span>
              </li>
            </ul>
          )
        })
      }
    </div>
  )
}
