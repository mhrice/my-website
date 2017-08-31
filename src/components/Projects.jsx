import React from 'react';
import SingleProject from './SingleProject';
import igm from '../resources/test.jpg';


export default class Projects extends React.Component {
  //color, picture, headerText, subHeaderText, bodyText, buttonLink

  renderProjects() {
    let projects = [
      {
        color: "#7BAAD0",
        picture: igm,
        headerText: "Header",
        subHeaderText: "Sub",
        bodyText: "This is a body paragraph.",
        buttonLink: "www.google.com",
        key: 1
      },
      {
        color: "green",
        picture: igm,
        headerText: "Header",
        subHeaderText: "Sub",
        bodyText: "This is a body paragraph.",
        buttonLink: "www.google.com",
        key: 2
      },
      {
        color: "red",
        picture: igm,
        headerText: "Header",
        subHeaderText: "Sub",
        bodyText: "This is a body paragraph.",
        buttonLink: "www.google.com",
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
