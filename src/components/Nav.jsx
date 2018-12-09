import React from 'react';
import {NavLink} from 'react-router-dom';
import MyLogo from '../resources/my-logo.png';
import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';

import MyMenu from './Menu';

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



renderMenu(){
  if(this.state.menu) {
    return (
          <MyMenu onClick={()=>{this.showMenu()}} />
        )
      }
}
  render() {
    return (
      <div>

      <MediaQuery maxDeviceWidth={800}>
      <AppBar
      className="nav-app-bar"
      showMenuIconButton = {this.state.showIcon}
      onLeftIconButtonTouchTap = {this.showMenu.bind(this)}
      >
      <button onClick= {this.showMenu.bind(this)} className="hidden-button"> </button>

      </AppBar>

      {this.renderMenu()}
      </MediaQuery>
      <MediaQuery minDeviceWidth={800}>


        <div>
          <ul className="menu">

            <li>
              <NavLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}} className="menu-text"><Avatar src = {MyLogo} style={{height:"30px", width: "40px", marginTop: "-8%"}} alt="my-logo"/></NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}} className="menu-text">About Me</NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName="active" activeStyle={{fontWeight: 'bold'}} className="menu-text">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active"  activeStyle={{fontWeight: 'bold'}} className="menu-text">Contact</NavLink>
            </li>
          </ul>
        </div>
  </MediaQuery>
      </div>
    );
  }
};
