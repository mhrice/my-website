import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ReactSVG from 'react-svg';

import RightIcon from '../resources/right-icon.svg';
import LeftIcon from '../resources/left-icon.svg';

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


handleClick(loc){
  window.location.href = `#/${loc}`;
  this.props.onClick();
}



  render() {
    return (
      <div>
    <Paper style={style} className="menu-dropdown">
      <Menu>
        <MenuItem primaryText="Menu" className="app-bar-title" onClick={()=>{this.handleClick("home")}} leftIcon={otherSvg}></MenuItem>
        <MenuItem primaryText="Home" className="app-bar-item" onClick={()=>{this.handleClick("home")}} rightIcon={svg} />
        <MenuItem primaryText="About" className="app-bar-item" onClick={()=>{this.handleClick("about")}} rightIcon={svg}/>
        <MenuItem primaryText="Projects" className="app-bar-item" onClick={()=>{this.handleClick("projects")}} rightIcon={svg} />
        <MenuItem primaryText="Contact" className="app-bar-item" onClick={()=>{this.handleClick("contact")}} rightIcon={svg}/>
      </Menu>
    </Paper>

  </div>

    )


  }



}
