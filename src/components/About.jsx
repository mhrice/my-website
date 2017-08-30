import React from 'react';
import MyCard from './Card';
import UCSDLogo from "../resources/UCSD-logo.png";
import '../styles/styles.scss';
import {Link} from 'react-router-dom';

export default class About extends React.Component {

  renderCards() {
    let cards = [
      {
      Title: "Education",
      Logo: UCSDLogo,
      cardTitle: "UCSD",
      cardSubtitle: "B.S. Electrical Engineering Class of 2019",
      cardText: "YAY",
      key: 1

    },
    {
      Title: "Skills",
      Logo: UCSDLogo,
      cardTitle: "Technical",
      cardText: "YAY",
      secondCardTitle: "Creative",
      secondCardText: "YYYAAAY",
      key: 2
    },
    {
      Title: "Interests",
      Logo: UCSDLogo,
      cardText: "Oh Yeah",
      key: 3
    }


    ]

    const listItems = cards.map((card)=>{
      return(
        <MyCard
        key={card.key}
        Title={card.Title}
        Logo={card.Logo}
        cardTitle={card.cardTitle}
        cardSubtitle={card.cardSubtitle}
        cardText={card.cardText}
        secondCardTitle={card.secondCardTitle}
        secondCardText={card.secondCardText}
        />
      )
    });
    return listItems

}


  render() {
    return (
      <div className="about-container">
      <h1 className = "about-header">
      About
      </h1>
      <p className="about-text">
      I was born in <Link className="home-link" to={"www.google.com"}>Rockville, Maryland</Link>,
      but moved to <Link className="home-link" to={"www.google.com"}>Los Angeles</Link> when I was 9.
      I grew up learning to love electronic music and technology and became passionate about electronic music
      production and audio signal processing. I also enjoy web development and embeded systems.

      </p>


        {this.renderCards()}

      </div>
    )
  }

}
