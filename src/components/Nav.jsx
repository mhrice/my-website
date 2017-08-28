import React from 'react';
import {NavLink} from 'react-router-dom';
import MyLogo from '../resources/my-logo.png';


export default class Nav extends React.Component {


  render() {
    return (
      <div>
        <div>
          <ul className="menu">

            <li>
              <NavLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}} className="menu-text"><img src = {MyLogo} style={{height:"24px", width: "50px", marginTop: "-2%"}} alt="my-logo"/></NavLink>
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

      </div>
    );
  }
};
