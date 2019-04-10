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
      allQuestions: [],
      currentQuestion: '',
      answerOptions: [],
      correctAnswer: null,
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/questions') // change in production
      .then(response => response.json())
      .then(questions => {

        const question = questions.questions;
        let question_id = this.props.location.state.questions.questions;

        console.log(question_id);
        console.log(question);

        var newQuestionsArray = [];

        question.forEach((obj) => {
          question_id.forEach((value) => {
            if (value === obj.id) {
              newQuestionsArray.push(obj);
            }
          });
        });

        console.log(newQuestionsArray);

        let answer = newQuestionsArray[0].correct_answer;

        this.setState({
          allQuestions: newQuestionsArray,
          currentQuestion: newQuestionsArray[0].question,
          answerOptions: newQuestionsArray[0].answers,
          correctAnswer: newQuestionsArray[0].answers[answer],
        });
      });
  }

  _setNextQuestion = (e) => {
    e.preventDefault();
    console.log('Set Next Question')
  }

  _setPreviousQuestion = (e) => {
    e.preventDefault();
    console.log('Set Previous Question');
  }

  render() {

    const { _setNextQuestion, _setPreviousQuestion } = this;
    const { currentQuestion, answerOptions, correctAnswer } = this.state;

    return (
      <Layout>
        <SEO title="Quiz" />
        <QuizComponent nextQuestion={_setNextQuestion} lastQuestion={_setPreviousQuestion} question={currentQuestion} answers={answerOptions} answer={correctAnswer} />
        <Link to="/"> Go back to the homepage </Link>
      </Layout>
    )
  };
}
