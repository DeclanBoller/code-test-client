import React from 'react';
import Answers from '../components/answers';

export default function quizComponent({ counter, total, question, answers, checkAnswer, classNames, nextQuestion }) {
  return (
    <div>
      <h3> Question {counter} / {total} </h3>
      <h3>{question}</h3>

      <Answers answers={answers} checkAnswer={checkAnswer} classNames={classNames} />

      <button onClick={nextQuestion}>{counter === total ? 'Finish quiz' : 'Next question'}</button>
    </div>
  )
}
