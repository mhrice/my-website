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

  window.location=buttonLink;
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
  var {color, picture, headerText, subHeaderText, bodyText, technologiesText, buttonLink, buttonText, anchorId} = this.props;
  if(!color) color = "none";
  return (
    <div className="single-project-container" style={{backgroundColor:color}} id={anchorId} >
    <img src={picture} alt="fake" className="project-img" id={this.state.id}></img>
    <h1 className="project-header">
    {headerText}
    </h1>
    <h3 className="project-subheader">
    {subHeaderText}
    </h3>
    <div className="project-discription">
    {bodyText}
    </div>
    <h3 className="project-technologies">
    Tools: {technologiesText}
    </h3>
    <RaisedButton label={buttonText} style={{marginBottom: "2%"}} onClick={()=>{this.handleClick(buttonLink)} } />

    </div>

  )
}

}
