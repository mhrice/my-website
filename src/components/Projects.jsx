import React from 'react';
import SingleProject from './SingleProject';
// import igm from '../resources/test.jpg';

import RFID from '../resources/rfid.png';
import TODO from '../resources/todo-app.png';
import Tower from '../resources/tower.png';
import MIDI from '../resources/midi-controller.png';
import BachJam from '../resources/back-jam.png';
import Rooftops from '../resources/rooftops.jpg';

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
        anchorId: "web-dev",
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
        picture: BachJam,
        headerText: "Bach Little Fugue in Gm Jam",
        subHeaderText: "Audio Programmer",
        bodyText: "This was a fun electronic performace based on Bach's four-voice\
        organ piece: 'Little' Fugue in G minor. Using Pure Data, I first created four\
        seperate organ patches and programmed them to play each voice's individual\
        MIDI data. I then created my own synth to 'jam' on top of the original voices.\
        Next I constructed a drum sequencer, and for the live performace, I 'sang' in\
        beatbox style drums and programed the drums to hit on different beats of\
        each measure. I also produced audio effects to layer at various points\
        including filtering, tremolo, and flanger as well as an eq. Finally, I\
        mapped all of the controls to my Novation LaunchKey 49 and performed my\
        jam with an annotated score.",
        technologiesText: 'Pure Data, Novation LaunchKey 49',
        buttonLink: "https://github.com/mhrice/MUS172Final",
        buttonText: "View On Github",
        anchorId: "audio",
        key: 4
      },
      {
        color: "orange",
        picture: MIDI,
        headerText: "Arduino Sampler and Effects",
        subHeaderText: "Audio Programmer",
        bodyText: "I created an audio tool that would record samples with a\
        microphone and then given the user the ability to play back the samples \
        and add on effects. These effects included distortion, filtering, \
        bitcrushing, and tempo changes. The user was provided with haptic and \
        visual feedback using buttons and LEDs as well as a potentiometer and a \
        multi-colored LED for individual parameter control.",
        technologiesText: 'Arduino, Pure Data',
        buttonLink: "https://github.com/mhrice/MUS172Final",
        buttonText: "View On Github",
        key: 5
      },

      {
        color: "#3edcf2",
        picture: Rooftops,
        headerText: "Rooftops Album",
        subHeaderText: "Producer",
        bodyText: <div>I recorded, mixed, and mastered this album for a friend of
        mine, Brian Frulla. This was recorded in spring of 2017 at my appartment
        with the a condenser mic (AT2020), as well as an EIE Pro Audio Interface
        and a pair of Rockit KRK 8's. The genre is acoustic. For the most of the
        tracks, there were only two inputs, Brian's guitar and his vocals, except
        for the last track which featured Chris Mukiibi with extra vocals.
        Overall it was super fun to produce this album and I'm looking forward to
        collaborating more with Brian.
        <div className="soundcloud">
        <h2> You can also see other music projects on my SoundCloud by clicking
        this logo:&nbsp; </h2>
        <iframe
              allowTransparency="true"
              scrolling="no"
              frameBorder="no"
              src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fmatthew-rice-6&color=orange_white&size=32"
              style={{width: "32px", height: "32px"}}
              title="soundcloud">
        </iframe>
        </div>
        </div>,
        technologiesText: 'Ableton Live, Audio-Technica AT2020, Ozone 7',
        buttonLink: "https://brianfrulla.bandcamp.com/album/rooftops",
        buttonText: "View On Bandcamp",
        key: 6
      },
      // {
      //   color: "yellow",
      //   picture: igm,
      //   headerText: "Header",
      //   subHeaderText: "Sub",
      //   bodyText: "This is a body paragraph.",
      //   buttonLink: "www.google.com",
      //   key: 7
      // }



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
        anchorId={project.anchorId}
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
