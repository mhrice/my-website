import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class SingleProject extends React.Component {
//props:
//color, picture, headerText, subHeaderText, bodyText, buttonLink
constructor(){
  super()
  this.state = {id:""}
}

handleClick(buttonLink){

  window.location.href=buttonLink;
}

componentDidMount(){
  var theKey = this.props.theKey;
  if(theKey===1) {
    this.setState({
      id: "projects-first-div"
    })
  }
}

render() {
  var {color, picture, headerText, subHeaderText, bodyText, buttonLink} = this.props;
  if(!color) color = "none";

  return (

    <div className="div2" style={{backgroundColor:color}} >
    <img src={picture} alt="fake" className="project-img" id={this.state.id}></img>
    <h1 className="project-header">
    {headerText}
    </h1>
    <h3 className="project-subheader">
    {subHeaderText}
    </h3>
    <p className="project-discription">
    {bodyText}
    </p>
    <RaisedButton label="View On Github" style={{marginBottom: "2%"}} onClick={()=>{this.handleClick(buttonLink)} } />
    </div>
  )
}





}
