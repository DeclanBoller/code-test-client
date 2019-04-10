import React, { Component } from 'react';
import { Link } from "gatsby";
import QuizComponent from '../components/quiz-component';

import Layout from "../components/layout";
import SEO from "../components/seo";

export default class SecondPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      score: 0,
      questionAnswered: false,
      allQuestions: [],
      currentQuestion: '',
      answerOptions: [],
      correctAnswer: '',
      total: null,
      classNames: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/questions') // change in production
      .then(response => response.json())
      .then(questions => {

        const question = questions.questions;
        let question_id = this.props.location.state.questions.questions;
        var newQuestionsArray = [];

        question.forEach((obj) => {
          question_id.forEach((value) => {
            if (value === obj.id) {
              newQuestionsArray.push(obj);
            }
          });
        });

        let { counter } = this.state;

        this.setState({
          counter: counter + 1,
          allQuestions: newQuestionsArray,
          currentQuestion: newQuestionsArray[counter].question,
          answerOptions: newQuestionsArray[counter].answers,
          correctAnswer: newQuestionsArray[counter].answers[newQuestionsArray[counter].correct_answer],
          total: newQuestionsArray.length,
        });
      });
  }

  _setNextQuestion = () => {
    let { counter, allQuestions, total } = this.state;

    if (counter === total) {
      console.log('total reached');
    } else {
      this.setState({
        counter: counter + 1,
        currentQuestion: allQuestions[counter].question,
        answerOptions: allQuestions[counter].answers,
        correctAnswer: allQuestions[counter].answers[allQuestions[counter].correct_answer],
      });
    }
  }

  _checkAnswerHandler = (e) => {
    const { classNames, correctAnswer } = this.state;

    let elem = e.currentTarget;
    let usrAnswer = elem.dataset.value;
    let ansId = Number(elem.dataset.id);

    let updatedClassNames = classNames;

    if (usrAnswer === correctAnswer) {
      updatedClassNames[ansId] = 'right';
      this.setState({
        score: this.state.score + 1,
      });
    } else {
      updatedClassNames[ansId] = 'wrong';
    }

    this.setState({
      classNames: updatedClassNames,
    })
  };

  render() {

    const { _setNextQuestion, _checkAnswerHandler } = this;
    const { currentQuestion, answerOptions, correctAnswer, total, counter, score, classNames } = this.state;

    return (
      <Layout>
        <SEO title="Quiz" />

        <QuizComponent
          nextQuestion={_setNextQuestion}
          checkAnswer={_checkAnswerHandler}
          question={currentQuestion}
          total={total}
          counter={counter}
          answers={answerOptions}
          correctAnswer={correctAnswer}
          score={score}
          classNames={classNames}
        />

        <Link to="/"> Go back to the homepage </Link>
      </Layout>
    )
  };
}
