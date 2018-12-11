import React, { Component } from 'react';
import Question from './components/Question.js';
import QuestionCount from './components/QuestionCount.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <QuestionCount
      counter={1}
      total={5}
      />
        <Question content="What is your favourite food?" />
      </div>
    );
  }
}

export default App;
