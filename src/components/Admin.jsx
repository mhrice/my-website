import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
var firebase = require('../config/firebase');
var database = firebase.database();

export default class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      emails: [],
      showMessage: false,
      message: '',
      name: '',
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
          alert("You are not authorized to view this content")
        window.location = '/login'; //If User is not logged in, redirect to login page
      }
    });
    this.downloadEmails();
  }

  logout() {
    this.setState({signOut: true});
    firebase.auth().signOut().then(function() {
      console.log("Logout");
      window.location = '/login';

      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
      console.log("ERR");
      console.log(error);
    });
  }

  downloadEmails() {
    let emailRef = database.ref('messages/');
    var emails = [];
    emailRef.once('value', function(snapshot) {

      snapshot.forEach(function(childSnapshot) {
        let stamp = childSnapshot.val().unixTime;
        emails.push({
          ...childSnapshot.val(),
          key: stamp
        })

      });
    }).then(() => {
      this.setState({emails: emails})

    });

  }

  showMessage(message, firstName, lastName) {
    var fullName = firstName + ' ' + lastName;
    this.setState({showMessage: true, message: message, name: fullName})
  }

  message() {
    if (this.state.showMessage) {
      return (
        <div className="admin-show-message">
          <h1>
            {this.state.name}
          </h1>
          <div className="message-content">
            {this.state.message}
          </div>
        </div>
      )
    }
  }

  closeMessage() {
    if (this.state.showMessage) {
      this.setState({showMessage: false})
    }
  }

  getEmails() {
    var items = this.state.emails.map((email) => {
      return (
        <Paper zDepth={2} key={email.key} className="email-div">
          <h5>Name: {email.firstName}
            {email.lastName}</h5>
          <h5>Email: {email.email}</h5>
          <h5>
            <RaisedButton onClick={() => {
              this.showMessage(email.message, email.firstName, email.lastName)
            }} className="admin-message">Message</RaisedButton>
          </h5>
          <h5>{email.timestamp}</h5>
        </Paper>
      )

    });
    return items;
  }

  render() {
    return (
      <div className="admin-container" onClick={() => {
        this.closeMessage()
      }}>
        <h1 className="admin-header">Emails
          <RaisedButton label="Logout" onClick={() => {
            this.logout()
          }} className="admin-logout" primary={true}></RaisedButton>
        </h1>
        <div className="emails-div">
          {this.getEmails()}
        </div>
        {this.message()}
      </div>
    )
  }

}
