import React from 'react';
import { Link } from "gatsby";

export default function quizTile({ quizTitle, linkTitle, state, id }) {
  return (
    <div>
      <Link to="/quiz/" state={{ questions: state }}>
        <div className='tile'>
          <h3> {quizTitle} </h3>
        </div>
      </Link >
    </div>
  )
}
