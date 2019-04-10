import React from 'react';

export default function answers(props) {
  return (
    <div id="answers">
      {
        props.answers.map((v, i) => {
          return (
            <ul id="answers" key={i}>
              <li data-id={i}> <span>{i + 1}</span> <p>{v}</p> </li>
            </ul>
          )
        })
      }
    </div>
  )
}
