import React from 'react';
import '../styles/styles.scss';
import {Link} from 'react-router-dom';

export default class Home extends React.Component {

  render() {
    return (
      <div className = "home-container">

      <div>
      <h1 className = "home-title-text">
      Matthew Rice
      </h1>
      <p className = "home-paragraph"> I specialize in&nbsp;
      <Link className="home-link" to={"www.google.com"}>audio technology</Link>,&nbsp;
      <Link className="home-link" to={"www.google.com"}>web development</Link>, and&nbsp;
      <Link className="home-link" to={"www.google.com"}>embeded systems</Link>
       </p>
      </div>

      </div>
    )
  }

}
