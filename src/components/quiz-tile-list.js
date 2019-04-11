import React from 'react';
import QuizTile from './quiz-tile';

export default function quizTileList({ quizzes }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      width: 'auto',
    }}>
      {
        quizzes.map((quiz, i) => {
          return (
            <QuizTile
              key={i}
              id={quizzes[i].id}
              quizTitle={quizzes[i].title}
              page='page-2'
              state={{ questions: quizzes[i].question_ids, title: quizzes[i].title }}
              linkTitle={`Take ${quizzes[i].title}`}
            />
          )
        })
      }
    </div>
  )
}
