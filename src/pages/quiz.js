import React, { Component } from 'react';
import { Link } from "gatsby";
import QuizComponent from '../components/quiz-component';

import Layout from "../components/layout";
import SEO from "../components/seo";

export default class SecondPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allQuestions: [],
      answerOptions: [],
      currentQuestion: '',
      questionId: null,
      answer: '',
      selectedAnswers: {},
      result: ''
    };
  }

  _handleAnswerSelected(e) {
    // 
  }

  _setNextQuestion(e) {
    e.preventDefault();
    console.log('Set Next Question')
  }

  _setPreviousQuestion(e) {
    e.preventDefault();
    console.log('Set Previous Question');
  }

  _viewResults(e) {
    e.preventDefault();
    console.log('Display Test Results')
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

        this.setState({
          allQuestions: newQuestionsArray,
          questionId: newQuestionsArray[0].id,
          currentQuestion: newQuestionsArray[0].question,
          answerOptions: newQuestionsArray[0].answers,
        });
      });
  }

  render() {
    return (
      <Layout>
        <SEO title="Quiz" />
        <QuizComponent nextQuestion={this._setNextQuestion.bind(this)} lastQuestion={this._setPreviousQuestion.bind(this)} question={this.state.currentQuestion} answers={this.state.answerOptions} />
        <Link to="/"> Go back to the homepage </Link>
      </Layout>
    )
  }
}
