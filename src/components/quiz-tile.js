import React from 'react';
import { Link } from "gatsby";

export default function quizTile({ quizTitle, linkTitle, state, id }) {
  return (
    <div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '200px',
        height: '200px',
        borderRadius: '5px',
        background: '#C0B9DD',
        margin: '25px 10px',
        textAlign: 'center',
      }}>
        <h3> {quizTitle} </h3>
        <Link to="/quiz/" state={{ questions: state }}> {linkTitle} </Link >
      </div>
    </div>
  )
}
