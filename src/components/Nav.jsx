import React from 'react';
import {NavLink} from 'react-router-dom';
import MyLogo from '../resources/my-logo.png';
import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';
import MyMenu from './Menu';
var firebase = require('../config/firebase');
var storage = firebase.storage();

var MediaQuery = require('react-responsive');

export default class Nav extends React.Component {
  constructor(){
    super();
    this.state = {menu: false, showIcon:true}
  }

showMenu(){
  this.setState({
    menu: !this.state.menu,
    showIcon: !this.state.showIcon
  });

}

downloadResume = () =>{
  var pathReference = storage.refFromURL("gs://rice-website.appspot.com/Rice_Resume_12-15-18.pdf");
  pathReference.getDownloadURL().then((url)=>{
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function(event) {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
    window.open(url, '_blank');

  }).catch((e)=>{
    console.log(e)
  });
}

renderMenu(){
  if(this.state.menu) {
    return (
          <MyMenu onClick={()=>{this.showMenu()}} />
        )
      }
}
  render() {
    return (
      <div className="nav-container">

      {/* <MediaQuery maxDeviceWidth={800}> */}
      {window.screen.width < 800 ?
      <React.Fragment>
        <AppBar
        className="nav-app-bar"
        showMenuIconButton = {this.state.showIcon}
        onLeftIconButtonTouchTap = {this.showMenu.bind(this)}
        >
        <button onClick= {this.showMenu.bind(this)} className="hidden-button"> </button>

        </AppBar>
        {this.renderMenu()}
      </React.Fragment>
      : 


        <div>
          <ul className="menu">

            <li>
              <NavLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}} className="menu-text"><Avatar src = {MyLogo} style={{height:"30px", width: "40px", marginTop: "-8%"}} alt="my-logo"/></NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}} className="menu-text menu-under">About Me</NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName="active" activeStyle={{fontWeight: 'bold'}} className="menu-text menu-under">Projects</NavLink>
            </li>
            <li>
              <div className="menu-text menu-under" onClick={this.downloadResume}>Resume</div>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active"  activeStyle={{fontWeight: 'bold'}} className="menu-text menu-under">Contact</NavLink>
            </li>
          </ul>
        </div>
      }
      
  {/* </MediaQuery> */}
      </div>
    );
  }
};
