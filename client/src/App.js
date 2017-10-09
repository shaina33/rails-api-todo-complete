import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from 'j-toker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      logInResult: ''
    };
  }

  configureAPI() {
    Auth.configure({
      apiUrl: '/api'
    });
  };

  // email: 'foo@bar.com',
  // password: 'password'
  logInAPI() {
    Auth.emailSignIn({
      email: this.state.email,
      password: this.state.password
    }).then(function(response) {
      console.log(response);
      if (response.data) {
        this.setState({
          result: 'Success! You are logged in as ' + response.data.email
        });
      }
    }.bind(this))
      .fail( function() {
        console.log('caught an error!');
        this.setState({
          result: "Sorry, you're login attempt failed"
        });
      }.bind(this));
  };

  updateEmail(evt) {
    this.setState({
      email: evt.target.value
    });
  };
  updatePassword(evt) {
    this.setState({
      password: evt.target.value
    });
  };


  render() {
    this.configureAPI();
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Login Form">
          <p>Log In to To-Do Application</p>
          <p>Email: <input value={this.state.email} onChange={evt => this.updateEmail(evt)}/></p>
          <p>Password: <input value={this.state.password} onChange={evt => this.updatePassword(evt)}/></p>
          <p>Testing: {this.state.email} {this.state.password}</p>
          <button onClick={() => this.logInAPI()}>Log In</button>
          <p>{this.state.result}</p>
        </div>
      </div>
    );
  }
}

export default App;
