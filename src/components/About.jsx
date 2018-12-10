import React from 'react';
import MyCard from './Card';
import Skills from './Skills';
import UCSDLogo from "../resources/UCSD-logo.png";
import SkillsLogo from "../resources/employee.svg";
import EducationLogo from "../resources/books.svg";
import InterestsLogo from "../resources/heart.svg";
import SkillsPic from "../resources/sup.svg";

export default class About extends React.Component {

  renderCards() {
    let cards = [
      {
        Title: "Education",
        Logo: EducationLogo,
        cardTitle: <div className="ucsd-title">
          UCSD
          <img src={UCSDLogo} className="ucsd-logo" alt="ucsd-logo"/>
        </div>,
        cardSubtitle: "B.S. Electrical Engineering Class of 2019, Minor in Music",
        cardText: <div id="education-list">Course Work Includes:
          <ul>
          <li id="education-list-text">Acoustics</li>
          <li id="education-list-text">Analog/Digital Design</li>
          <li id="education-list-text">Algorithms</li>
          <li id="education-list-text">Data Structures</li>
            <li id="education-list-text">Digital Signal Processing</li>
            <li id="education-list-text">Computer Music</li>
            <li id="education-list-text">Music Programming</li>
          </ul>
        </div>,
        key: 1
      }, {
        Title: "Skills",
        Logo: SkillsLogo,
        cardText: <Skills />,
        key: 2
      }, {
        Title: "Interests",
        Logo: InterestsLogo,
        cardTitle: "A few things that I enjoy: ",
        cardText: <ul>
          <li id="education-list-text">Web App Development</li>
          <li id="education-list-text">Data Science/Machine Learning</li>
          <li id="education-list-text">Music Production (click&nbsp;
            <a href="https://www.soundcloud.com/matthew-rice-6"
            className="soundcloud-link">here&nbsp;</a>
            for a link to my SoundCloud)
          </li>
          <li id="education-list-text">Classical Piano</li>
          <li id="education-list-text">Digital Signal Processing</li>
          <li id="education-list-text">Live Sound</li>
        </ul>,
        key: 3
      }

    ]

    const listItems = cards.map((card) => {
      return (
        <MyCard
        key={card.key}
        Title={card.Title}
        Logo={card.Logo}
        cardTitle={card.cardTitle}
        cardSubtitle={card.cardSubtitle}
        cardText={card.cardText}
        />
      )
    });
    return listItems

  }

  render() {
    return (
      <div className="about-container">
        <h1 className="about-header">
          About
        </h1>
        <p className="about-text">
          I'm a current undergraduate at UC San Diego. Check out my background below
          or click on the projects tab to see my skills in action.
        </p>

        {this.renderCards()}

      </div>
    )
  }

}
