import React from 'react';
import MyCard from './Card';
import UCSDLogo from "../resources/UCSD-logo.png";
import SkillsLogo from "../resources/employee.svg";
import EducationLogo from "../resources/books.svg";
import InterestsLogo from "../resources/heart.svg";
import SkillsPic from "../resources/sup.svg";
// import '../styles/styles.scss';

export default class About extends React.Component {

  renderCards() {
    let cards = [
      {
      Title: "Education",
      Logo: EducationLogo,
      cardTitle: <div className="ucsd-title">
      UCSD <img src={UCSDLogo} className="ucsd-logo" alt="ucsd-logo"/>
      </div>,
      cardSubtitle: "B.S. Electrical Engineering Class of 2019, Minor in Music",
      cardText: <div id="education-list">Course Work Includes:
      <ul>
      <li id="education-list-text">Signal Processing</li>
      <li id="education-list-text">Analog Design</li>
      <li id="education-list-text">Data Structures</li>
      <li id="education-list-text">Acoustics</li>
      <li id="education-list-text">Music Programming</li>
      <li id="education-list-text">Embeded Systems</li>
      </ul>
      </div>,
      key: 1
    },
    {
      Title: "Skills",
      Logo: SkillsLogo,
      cardTitle: <div className="skills-div"> My Skills Graph</div>,
      cardText: <img src={SkillsPic} className="skills-pic" alt="My Skills"/>,
      //secondCardTitle: "Creative",
      //secondCardText: "YYYAAAY",
      key: 2
    },
    {
      Title: "Interests",
      Logo: InterestsLogo,
      cardTitle: "A few things that I enjoy: ",
      cardText:
      <ul>
      <li id="education-list-text">Web App Development</li>
      <li id="education-list-text">Data Science</li>
      <li id="education-list-text">Machine Learning</li>
      <li id="education-list-text">Music Production</li>
      <li id="education-list-text">Classical Piano</li>
      <li id="education-list-text">Digital Signal Processing</li>
      </ul>,
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
    /* secondCardTitle={card.secondCardTitle}
        secondCardText={card.secondCardText} */
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
      I was born in <a href="https://goo.gl/maps/kc6rTfHVVdM2" className="home-link" >Rockville, Maryland</a>,
      but moved to <a href="https://goo.gl/maps/65rMTJTQyoL2" className="home-link" >Los Angeles</a> when I was 9.
      I grew up learning to love electronic music and technology and became passionate about electronic music
      production and audio signal processing. I also enjoy web development and embeded systems.

      </p>


        {this.renderCards()}

      </div>
    )
  }

}
