import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Nav extends React.Component {


  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              Matthew Rice
            </li>
            <li>
              <NavLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</NavLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
            Created by Matthew Rice
          </li>
        </ul>
        </div>
      </div>
    );
  }
};
