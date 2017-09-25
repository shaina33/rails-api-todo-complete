import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from 'j-toker';

class App extends Component {
  TestAPI() {
    Auth.configure({
      apiUrl: 'localhost:3000'
    });
    fetch('/api/users').then((data) => {console.log(data)});
  };

  render() {
    this.TestAPI();
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
