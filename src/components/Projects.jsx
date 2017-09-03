import React from 'react';
import SingleProject from './SingleProject';
import igm from '../resources/test.jpg';

import RFID from '../resources/rfid.png';
import TODO from '../resources/todo-app.png';
import Tower from '../resources/tower.png';

export default class Projects extends React.Component {
  //color, picture, headerText, subHeaderText, bodyText, buttonLink

  renderProjects() {
    let projects = [
      {
        color: "",
        picture: RFID,
        headerText: "Birch Aquarium RFID Pathways",
        subHeaderText: "Product Designer",
        bodyText: "Worked with a team to develop an RFID-based\
        personalized system that would showcase the potential of RFID technology.\
        The goal was for users to have an RFID ticket that they could register to\
        a specific 'professional pathway'. Each pathway would be a specific role\
        on a science team that the user would take on and as they traveled around\
        the Aquarium they were able to scan their card and see additional content\
        based on their pathway. We also created an update system that allows for\
        simple, picture-based updates to the content.",
        technologiesText: 'Raspberry Pi, HTML/CSS, Vanilla Javascript, JQuery, Firebase',
        buttonLink: "https://github.com/mhrice/RFID-pathways-public",
        buttonText: "View On Github",
        key: 1
      },
      {
        color: "green",
        picture: TODO,
        headerText: "My Todo App",
        subHeaderText: "Web Developer",
        bodyText: "Based on Andrew Mead's 'Complete React Web App Developer Course'\
        on Udemy, this app lets a user login using Github, and make a todo list.\
        Users can then search todos, check off todos, and delete todos. The list\
        will show a timestamp when actions are performed. Skills learned from this\
        course heavily influenced the development of this website (which is also\
        written in React).",
        technologiesText: 'React, Redux, Firebase, Heroku',
        buttonLink: "https://github.com/mhrice/React-todo",
        buttonText: "View On Github",
        key: 2
      },
      {
        color: "red",
        picture: Tower,
        headerText: "Tower",
        subHeaderText: "Full-Stack Engineer",
        bodyText: "Tower is a texting campaign platform from startup company\
        Alchemy. I worked on both front-end and back-end to customize the UI and\
        the functionality of the texting system. This project is currently in\
        development as we are adding voicemail-drop functionality and email/push\
        notifications.",
        technologiesText: 'Ionic Framework, Firebase, Plivo, Firebase-Functions\
        (as backend microservices)',
        buttonLink: "https://gitlab.ixir.io/Tower/client-app/",
        buttonText: "View On Github",
        key: 3
      },
      {
        color: "purple",
        picture: igm,
        headerText: "Header",
        subHeaderText: "Sub",
        bodyText: "This is a body paragraph.",
        buttonLink: "www.google.com",
        key: 4
      },
      {
        color: "orange",
        picture: igm,
        headerText: "Header",
        subHeaderText: "Sub",
        bodyText: "This is a body paragraph.",
        buttonLink: "www.google.com",
        key: 5
      },
      {
        color: "white",
        picture: igm,
        headerText: "Header",
        subHeaderText: "Sub",
        bodyText: "This is a body paragraph.",
        buttonLink: "www.google.com",
        key: 6
      },
      {
        color: "yellow",
        picture: igm,
        headerText: "Header",
        subHeaderText: "Sub",
        bodyText: "This is a body paragraph.",
        buttonLink: "www.google.com",
        key: 7
      }



    ]

    const listItems = projects.map((project)=>{
      return(
        <SingleProject
        color={project.color}
        picture={project.picture}
        headerText={project.headerText}
        subHeaderText={project.subHeaderText}
        bodyText={project.bodyText}
        buttonLink={project.buttonLink}
        technologiesText={project.technologiesText}
        buttonText={project.buttonText}
        key={project.key}
        theKey={project.key}
        />
      )
    });
    return listItems
  }


//color, picture, headerText, subHeaderText, bodyText, buttonLink
  render() {
    return (
      <div className="projects-container">
      <h1>Projects</h1>
      {this.renderProjects()}

      </div>
    )
  }

}
