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
      correctAnswer: '',
      total: null,
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

        this.setState({
          counter: this.state.counter + 1,
          allQuestions: newQuestionsArray,
          currentQuestion: newQuestionsArray[this.state.counter].question,
          answerOptions: newQuestionsArray[this.state.counter].answers,
          correctAnswer: newQuestionsArray[this.state.counter].answers[newQuestionsArray[this.state.counter].correct_answer],
          total: newQuestionsArray.length,
        });

        console.log("Quiz Question IDs:", question_id);
        console.log("All Questions:", question);
        console.log("New Questions:", newQuestionsArray);
        console.log(this.state);
      });
  }

  _setNextQuestion() {

    this.setState({
      counter: this.state.counter + 1,
      currentQuestion: this.state.allQuestions[this.state.counter].question,
      answerOptions: this.state.allQuestions[this.state.counter].answers,
      correctAnswer: this.state.allQuestions[this.state.counter].answers[this.state.allQuestions[this.state.counter].correct_answer],
    });

    console.log(this.state)
  }

  render() {

    const { _setNextQuestion } = this;
    const { currentQuestion, answerOptions, correctAnswer, total, counter } = this.state;

    return (
      <Layout>
        <SEO title="Quiz" />
        <QuizComponent nextQuestion={_setNextQuestion.bind(this)} lastQuestion={_setPreviousQuestion.bind(this)} question={currentQuestion} answers={answerOptions} answer={correctAnswer} total={total} counter={counter} />
        <Link to="/"> Go back to the homepage </Link>
      </Layout>
    )
  };
}
