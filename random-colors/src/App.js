import React, { Component } from 'react';
import './App.css';
import Random from './components/Random'

class App extends Component {
  render() {
    return (
      <div>
      <h1>Random Colors!</h1>
      <Random/>
      </div>
    );
  }
}

export default App;
