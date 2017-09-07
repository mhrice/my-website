import React from 'react';
// import '../styles/styles.scss';
// import '../styles/styles.scss';
import { HashLink as Link } from 'react-router-hash-link';

export default class Home extends React.Component {

  render() {
    return (
      <div className = "home-container">

      <div>
      <h1 className = "home-title-text">
      Matthew Rice
      </h1>
      <p className = "home-paragraph"> I specialize in&nbsp;
      <Link className="home-link" to={"/projects#web-dev"} >web development</Link>,&nbsp;
      <Link className="home-link" to={"/projects#audio"}>audio technology</Link>, and&nbsp;
      <Link className="home-link" to={"/projects#embeded"}>embeded systems</Link>
       </p>
      </div>

      </div>
    )
  }

}
