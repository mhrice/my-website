import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { HashRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <Nav></Nav>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      </HashRouter>
    );
  }
}

export default App;
