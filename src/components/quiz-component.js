import React from 'react';
import { Link } from 'gatsby';
import Answers from '../components/answers';

export default function quizComponent({ counter, total, question, answers, checkAnswer, classNames, nextQuestion, score, showScore, quizTitle }) {
  return (
    <div className='quiz-cont'>
      <div className="header-cont">
        <h1>{quizTitle}</h1>
        <h3> Question {counter} / {total} </h3>
        <h3>{showScore > total ? `You Scored ${score} Out Of ${total}` : question}</h3>
      </div>

      <Answers answers={answers} checkAnswer={checkAnswer} classNames={classNames} />

      <button className='next' onClick={nextQuestion}>{counter === total ? 'Submit Score' : 'Next question'}</button>

      <Link className='return' to="/"> Return To All Quizzes</Link>
    </div>
  )
}
