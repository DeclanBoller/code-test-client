import React from 'react';

export default function answers(props) {
  return (
    <div id="answers">
      {
        props.answers.map((v, i) => {
          return (
            <ul id="answers" key={i}>
              <li onClick={props.checkAnswer} className={props.classNames[i]} data-value={v} data-id={i}> <span>{i + 1}</span> <p>{v}</p> </li>
            </ul>
          )
        })
      }
    </div>
  )
}
