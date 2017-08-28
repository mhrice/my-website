import React, { Component } from 'react';
import './App.css';

import { HashRouter, Route } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './styles/styles.scss';

//components
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

import Background from './resources/Background.jpg';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <HashRouter>
      <div className="App">

        <link rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Muli">
    </link>
    <img src={ Background } className="home-image" alt="Background"/>
        <Nav></Nav>


          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>


      </div>
      </HashRouter>
    </MuiThemeProvider>
    );
  }
}

export default App;
