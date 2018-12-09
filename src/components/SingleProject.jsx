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
  var {picture, headerText, subHeaderText, bodyText, technologiesText, buttonLink, buttonText, anchorId} = this.props;
  let color = "none";
  return (
    <div className="single-project-container" id={anchorId} >
    <img src={picture} alt="fake" className="project-img" id={this.state.id}></img>
    <div className="project-header">
    {headerText}
    </div>
    <div className="project-subheader">
    {subHeaderText}
    </div>
    <div className="project-description">
    {bodyText}
    </div>
    <div className="project-technologies">
    Tools: {technologiesText}
    </div>
    <RaisedButton label={buttonText} style={{marginBottom: "2%"}} onClick={()=>{this.handleClick(buttonLink)} } />

    </div>

  )
}

}
