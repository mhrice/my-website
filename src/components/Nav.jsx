import React from 'react';
import {NavLink} from 'react-router-dom';


export default class Nav extends React.Component {


  render() {
    return (
      <div>
        <div>
          <ul className="menu">

            <li>
              <NavLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}} className="menu-text">Matthew Rice</NavLink>
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
