import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import {Link} from 'react-router-dom';


var validator = require("email-validator");



const style = {
  marginLeft: 20,
  minWidth: "90%",

};

export default class Contact extends React.Component {
constructor(){
  super()
  this.state = {
    errorText: '',
    email:'',
    open: false
  }
}

handleClick(){
// let email = "hi";
  if(!validator.validate(this.state.email)){
    this.setState({
      errorText: "Please input a valid email"
    });
  }
  else {
    this.setState({
    errorText: "",
    open: true
    });
  }
}
handleRequestClose(){
  this.setState({
    open: false
  });
};

  render() {
    return (
      <div className="contact-container">
      <h1 className="contact-title">
        Contact Me
      </h1>
      <p> Fill out this form, or simply <Link className="home-link" to={"www.google.com"}>email</Link> me </p>
      <Paper zDepth={2} className="contact-form-container">
    <TextField style={style} underlineShow={false} floatingLabelText="First Name" />
    <Divider />
    <TextField style={style} underlineShow={false} floatingLabelText="Last Name"/>
    <Divider />
    <TextField style={style} underlineShow={false} floatingLabelText="Email"
    errorText={this.state.errorText}
    value={this.state.email}
    onChange={(event: object, newValue: string)=>{this.setState({email: newValue})}}/>
    <Divider />
    <TextField style={style} underlineShow={false} floatingLabelText="Message"
    className="contact-form-message" multiLine={true}
    rows={2}
    rowsMax={4}/>
    <Divider />
  </Paper>
  <RaisedButton label="Submit!" className ="contact-submit-button" onClick={()=>{this.handleClick()} } />
  <Snackbar
            open={this.state.open}
            message="Message Sent"
            autoHideDuration={2000}
            onRequestClose={()=>{this.handleRequestClose()} }
          />

      </div>
    )
  }

}
