import React, { Component } from 'react';
import Question from './components/Question.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Quiz</h2>
        </div>
        <Question content="What is your favourite food?" />
      </div>
    );
  }
}

export default App;
