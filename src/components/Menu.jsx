import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ReactSVG from 'react-svg';
import RightIcon from '../resources/right-icon.svg';
import LeftIcon from '../resources/left-icon.svg';
import {Link} from 'react-router-dom';

const style = {
  display: 'inline-block',
  margin: '0 32px 16px 0',
  position: 'absolute',
  top: '0%'

};

let svg = <ReactSVG
  path={RightIcon}
/>

let otherSvg = <ReactSVG
  path={LeftIcon}
/>

export default class MyMenu extends React.Component {



  render() {
    return (
      <div>
    <Paper style={style} className="menu-dropdown">
      <Menu>
        <MenuItem primaryText="Menu" className="app-bar-title" leftIcon={otherSvg}></MenuItem>
        <Link to="/" className="menu-text"><MenuItem primaryText="Home" className="app-bar-item"rightIcon={svg} onClick={this.props.onClick}></MenuItem></Link>
        <Link to="/about" className="menu-text"><MenuItem primaryText="About" className="app-bar-item" onClick={this.props.onClick} rightIcon={svg}/></Link>
        <Link to="/projects" className="menu-text"><MenuItem primaryText="Projects" className="app-bar-item" onClick={this.props.onClick} rightIcon={svg} /></Link>
        <Link to="/contact" className="menu-text"><MenuItem primaryText="Contact" className="app-bar-item" onClick={this.props.onClick} rightIcon={svg}/></Link>
      </Menu>
    </Paper>

  </div>

    )
  }

}
