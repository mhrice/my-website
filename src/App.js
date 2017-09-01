import React, { Component } from 'react';
import './App.css';

import { HashRouter, Route, Switch } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import './styles/styles.scss';
import './styles/styles.css';


//components
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import AdminLogin from './components/AdminLogin';
import Admin from './components/Admin';

// import Background from './resources/Background.jpg';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {

  handleClick(hidden){
    console.log(hidden);
    // this.setState({
    //   hidden: hidden
    // })
  }
  render() {
    return (
      <MuiThemeProvider>
      <HashRouter>
      <div className="App">

        <link rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Muli">
    </link>

        <Nav></Nav>

        <Switch>
          {/*<Route exact path="/" component={Home}/> */ }
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
          <Route exact path = "/login" component={AdminLogin} />
          <Route exact path = "/admin" component={Admin} />
          <Route path="/*" component={Home} />
          </Switch>

      </div>
      </HashRouter>
    </MuiThemeProvider>
    );
  }
}

export default App;
