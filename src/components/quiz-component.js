import React from 'react';
import Answers from '../components/answers';

export default function quizComponent({ counter, total, question, answers, checkAnswer, classNames, nextQuestion, score, showScore, quizTitle }) {
  return (
    <div>
      <h1>{quizTitle}</h1>
      <h3> Question {counter} / {total} </h3>
      <h3>{showScore > total ? `You Scored ${score} Out Of ${total}` : question}</h3>

      <Answers answers={answers} checkAnswer={checkAnswer} classNames={classNames} />

      <button onClick={nextQuestion}>{counter === total ? 'Submit Score' : 'Next question'}</button>
    </div>
  )
}
