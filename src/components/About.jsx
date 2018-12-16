import React from 'react';
import MyCard from './Card';
import Skills from './Skills';
import UCSDLogo from "../resources/UCSD-logo.png";
import SkillsLogo from "../resources/employee.svg";
import EducationLogo from "../resources/books.svg";
import InterestsLogo from "../resources/heart.svg";
import SkillsPic from "../resources/sup.svg";
import ProfPic from "../resources/facebook_prof_pic.png";
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';

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
          <li id="education-list-text" className="list-item">Acoustics</li>
          <li id="education-list-text" className="list-item">Analog/Digital Design</li>
          <li id="education-list-text" className="list-item">Algorithms</li>
          <li id="education-list-text" className="list-item">Computer Music</li>
          <li id="education-list-text" className="list-item">Data Structures</li>
          <li id="education-list-text" className="list-item">Digital Signal Processing</li>
          <li id="education-list-text" className="list-item">Music Programming</li>
          <li id="education-list-text" className="list-item">Recording</li>
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
          <li id="education-list-text" className="list-item">Web App Development</li>
          <li id="education-list-text" className="list-item">Data Science/Machine Learning</li>
          <li id="education-list-text" className="list-item">Music Production (click&nbsp;
            <a href="https://www.soundcloud.com/matthew-rice-6"
            className="soundcloud-link">here&nbsp;</a>
            for a link to my SoundCloud)
          </li>
          <li id="education-list-text" className="list-item">Classical Piano</li>
          <li id="education-list-text" className="list-item">Digital Signal Processing</li>
          <li id="education-list-text" className="list-item">Live Sound</li>
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
      <div className="about-description-container">
        <img src={ProfPic} className="profile-image"/>
        <Card className="about-text-container">
          <CardText className="about-text">
          <div className="about-greeting-container"><div className="about-greeting">Hello!</div></div>
          <div className="about-name">I'm Matthew Rice</div>
            <div className="about-text-description">
              I'm a current undergraduate at UC San Diego where I am working on a
              B.S. in Electrical Engineering with a minor in music.
              Originally from beautiful Manhattan Beach, California, I have developed
              passions in music, math, and computer science. I'm a:
              <ul>
                <li className="list-item">DSP enthusiast with extensive course work in signal processing,
                and I focus on applying DSP algorithms for musical purposes</li>
                <li className="list-item">Proficient programmer with many academic and industry software projects
                under my belt </li>
                <li className="list-item">Experienced front-of-house engineer having mixed over 200 concerts
                with artists such as Nate Smith, FLETCHER, and JMSN</li>
              </ul>
              Check out my background below or click on the projects tab to see my skills in action
            </div>
            </CardText>
          </Card>
        </div>

        {this.renderCards()}

      </div>
    )
  }

}
