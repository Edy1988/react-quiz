import React, { Component } from 'react';
import Question from './components/Question.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Question content="What is your favourite food?" />
      </div>
    );
  }
}

export default App;
