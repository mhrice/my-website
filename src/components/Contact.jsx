import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import * as moment from 'moment';
var firebase = require('../config/firebase');
var validator = require("email-validator");
var database = firebase.database();


const style = {
  marginLeft: 20,
  minWidth: "90%",

};

export default class Contact extends React.Component {
constructor(){
  super()
  this.state = {
    errorText: '',
    firstName: '',
    lastName: '',
    email:'',
    message: '',
    open: false
  }
}
uploadMessage(firstName, lastName, email, message, timestamp, unixTime) {
  database.ref(`messages/${0-unixTime}`).set({
    firstName: firstName,
    lastName: lastName,
    email: email,
    message: message,
    timestamp: timestamp,
    unixTime: 0-unixTime
  });
}
handleClick(){
// let email = "hi";
  if(!validator.validate(this.state.email)){
    this.setState({
      errorText: "Please input a valid email"
    });
  }
  else {
    let {firstName, lastName, email, message} = this.state;
    let now1 = moment().format('MMMM Do YYYY, h:mm:ss a');
    let unixTime = moment().unix();
    this.uploadMessage(firstName, lastName, email, message, now1, unixTime)
    setTimeout(()=>{
      this.setState({
      errorText: "",
      open: true,
      firstName: "",
      lastName: "",
      email:'',
      message: ''
      });
    }, 500);

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
      <p className="contact-paragraph"> Fill out this form, or simply&nbsp;
      <a href="mailto:matthewrice11@yahoo.com" target="_top" className="home-link">email</a> me </p>
      <Paper zDepth={2} className="contact-form-container">
    <TextField style={style} underlineShow={false} floatingLabelText="First Name"
    value={this.state.firstName}
    onChange={(event: object, newValue: string)=>{this.setState({firstName: newValue})}}/>
    <Divider />
    <TextField style={style} underlineShow={false} floatingLabelText="Last Name"
    value={this.state.lastName}
    onChange={(event: object, newValue: string)=>{this.setState({lastName: newValue})}}/>
    <Divider />
    <TextField style={style} underlineShow={false} floatingLabelText="Email"
    errorText={this.state.errorText}
    value={this.state.email}
    onChange={(event: object, newValue: string)=>{this.setState({email: newValue})}}/>
    <Divider />
    <TextField style={style} underlineShow={false} floatingLabelText="Message"
    className="contact-form-message"
    value={this.state.message}
    onChange={(event: object, newValue: string)=>{this.setState({message: newValue})}}
    multiLine={true}
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
