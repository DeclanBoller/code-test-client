import React, { Component } from 'react';
import QuizList from '../components/quiz-tile-list';
import '../styles/style.css';

import Layout from "../components/layout";
import SEO from "../components/seo";

export default class IndexPage extends Component {
  constructor() {
    super();
    this.state = {
      allQuizzes: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/quizzes') // change in production
      .then(response => response.json())
      .then(quizzes => { this.setState({ allQuizzes: quizzes.quizzes }) });
  }

  render() {
    const { allQuizzes } = this.state;
    return (
      <Layout>
        <SEO title="All Quizzes" keywords={[`gatsby`, `application`, `react`]} />
        <div className="title-container" style={{
          textAlign: 'center',
        }}>
          <h1>View All Quizzes</h1>
        </div>
        <div className="tiles" style={{
          width: 'auto'
        }}>
          <QuizList quizzes={allQuizzes} />
        </div>
      </Layout>
    )
  }
}


