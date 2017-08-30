import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class SingleProject extends React.Component {
//props:
//color, picture, headerText, subHeaderText, bodyText, buttonLink


handleClick(buttonLink){

  window.location.href=buttonLink;
}

render() {
  var {color, picture, headerText, subHeaderText, bodyText, buttonLink} = this.props;

  return (

    <div className="div2" style={{backgroundColor:color}}>
    <img src={picture} alt="fake" className="project-img"></img>
    <h1 className="project-header">
    {headerText}
    </h1>
    <h3 className="project-subheader">
    {subHeaderText}
    </h3>
    <p className="project-discription">
    {bodyText}
    </p>
    <RaisedButton label="View on Github" style={{marginBottom: "2%"}} onClick={()=>{this.handleClick(buttonLink)} } />
    </div>
  )
}





}
