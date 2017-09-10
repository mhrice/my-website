import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
var firebase = require('../config/firebase');


const style = {
  marginLeft: 20,
  maxHeight: "1%!important"
};

export default class AdminLogin extends React.Component {

  constructor(){
    super()
    this.state = {email: '', password:'', error:''}
  }

  handleKeyPress(event){
    if(event.key === 'Enter'){
      this.login()
    }
  }

login(){
let {email, password} = this.state;
var that = this;
firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{

  that.setState({
    error: ""
  });
  window.location.href="/#/admin"

}).catch((error)=>{
  console.log(email);
  console.log(password);
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode)
  console.log(errorMessage)
  that.setState({
    error: "Invalid Email or Password"
  });


});


}

  render(){
    return(
      <div className="admin-container">
      <h1>Admin Login</h1>
      <div className="admin-form-container">
      <Paper zDepth={0} className="admin-paper-container">
    <TextField hintText="Email" style={style} underlineShow={false}
    value={this.state.email}
    onChange={(event: object, newValue: string)=>{this.setState({email: newValue})}}/>
    <Divider />
    </Paper>
    <Paper zDepth={0} className="admin-paper-container">
    <TextField hintText="Password" style={style} underlineShow={false} type="password"
    value={this.state.password}
    onChange={(event: object, newValue: string)=>{this.setState({password: newValue})}}
    onKeyPress={(e)=>this.handleKeyPress(e)} />
    <Divider />
    </Paper>
    <RaisedButton label="Submit!" className ="admin-submit-button" onClick={()=>{this.login()} } />
      </div>
    <h3 className="admin-error">{this.state.error}</h3>
      </div>
    )
  }







}
