import React from 'react';
import SingleProject from './SingleProject';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Modal from '@material-ui/core/Modal';
//Images for projects
import RFID from '../resources/rfid.png';
import TODO from '../resources/todo-app.png';
import Tower from '../resources/tower.png';
import MIDI from '../resources/midi-controller.png';
import BachJam from '../resources/back-jam.png';
import Rooftops from '../resources/rooftops.jpg';
import Spectrogram from '../resources/spectrogram.png';

let projects = [
  {
    color: "",
    picture: Spectrogram,
    headerText: "Spectrogram",
    subHeaderText: "Web Developer",
    bodyText: <div>Designed an adjustable spectrogram using JavaScript’s Web Audio API.
    It is based on a previous project by Boris Smus
    (Click <a className="home-link" href="https://github.com/borismus/spectrogram">here</a> for his project).
    The project has a ton of controls, including changing the limits of the graph. You can also draw on it with your mouse or finger,
    creating a sine wave at the touched frequency. Furthermore, there are options to
    change the timbre of the sound as well as snap the drawn frequencies to a specific scale.
    You can view a demo of the project&nbsp;
    <a className="home-link" href="http://listeningtowaves.github.io/Spectrogram/">here</a>.
    I'm also currently working on a Web Audio-based oscilloscope.</div>,
    technologiesText: "Web Audio API, HTML/CSS, Vanilla Javascript, Music Theory",
    buttonLink: "https://github.com/ListeningToWaves/Spectrogram",
    buttonText: "View On Github",
    anchorId: "web-dev",
    key: 1
  },
  {
    color: "#f2f271",
    picture: RFID,
    headerText: "Birch Aquarium RFID Pathways",
    subHeaderText: "Product Designer",
    bodyText: `Worked with a team to develop an RFID-based\
    personalized system that would showcase the potential of RFID technology.\
    The goal was for users to have an RFID ticket that they could register to\
    a specific 'professional pathway'. Each pathway would be a specific role\
    on a science team that the user would take on and as they traveled around\
    the Aquarium they were able to scan their card and see additional content\
    based on their pathway. We also created an update system that allows for\
    simple, picture-based updates to the content.`,
    technologiesText: 'Raspberry Pi, HTML/CSS, Vanilla Javascript, JQuery, Firebase',
    buttonLink: "https://github.com/jguidry/SEE_2017_RFID_Pathways",
    buttonText: "View On Github",
    key: 2
  },
  {
    color: "green",
    picture: TODO,
    headerText: "My Todo App",
    subHeaderText: "Web Developer",
    bodyText: `Based on Andrew Mead's 'Complete React Web App Developer Course'\
    on Udemy, this app lets a user login using Github, and make a todo list.\
    Users can then search todos, check off todos, and delete todos. The list\
    will show a timestamp when actions are performed. Skills learned from this\
    course heavily influenced the development of this website (which is also\
    written in React).`,
    technologiesText: 'React, Redux, Firebase, Heroku',
    buttonLink: "https://github.com/mhrice/React-todo",
    buttonText: "View On Github",
    key: 3
  },
  {
    color: "red",
    picture: Tower,
    headerText: "Tower",
    subHeaderText: "Full-Stack Engineer",
    bodyText: `Tower is a texting campaign platform from startup company\
    Alchemy. I worked on both front-end and back-end to customize the UI and\
    the functionality of the texting system. This project is currently in\
    development as we are adding voicemail-drop functionality and email/push\
    notifications.`,
    technologiesText: `Ionic Framework, Firebase, Plivo, Firebase-Functions\
    (as backend microservices)`,
    buttonLink: "https://gitlab.ixir.io/Tower/client-app/",
    buttonText: "View On Github",
    key: 4
  },
  {
    color: "purple",
    picture: BachJam,
    headerText: "Bach Little Fugue in Gm Jam",
    subHeaderText: "Audio Programmer",
    bodyText: `This was a fun electronic performace based on Bach's four-voice\
    organ piece: 'Little' Fugue in G minor. Using Pure Data, I first created four\
    seperate organ patches and programmed them to play each voice's individual\
    MIDI data. I then created my own synth to 'jam' on top of the original voices.\
    Next I constructed a drum sequencer, and for the live performace, I 'sang' in\
    beatbox style drums and programed the drums to hit on different beats of\
    each measure. I also produced audio effects to layer at various points\
    including filtering, tremolo, and flanger as well as an eq. Finally, I\
    mapped all of the controls to my Novation LaunchKey 49 and performed my\
    jam with an annotated score.`,
    technologiesText: 'Pure Data, Novation LaunchKey 49',
    buttonLink: "https://github.com/mhrice/MUS172Final",
    buttonText: "View On Github",
    anchorId: "audio",
    key: 5
  },
  {
    color: "orange",
    picture: MIDI,
    headerText: "Arduino Sampler and Effects",
    subHeaderText: "Audio Programmer",
    bodyText: `I created an audio tool that would record samples with a\
    microphone and then given the user the ability to play back the samples \
    and add on effects. These effects included distortion, filtering, \
    bitcrushing, and tempo changes. The user was provided with haptic and \
    visual feedback using buttons and LEDs as well as a potentiometer and a \
    multi-colored LED for individual parameter control.`,
    technologiesText: 'Arduino, Pure Data',
    buttonLink: "https://github.com/mhrice/MUS172Final",
    buttonText: "View On Github",
    key: 6,
    anchorId: 'embedded'
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
    {/*<div className="soundcloud">
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
    </div>*/}
    </div>,
    technologiesText: 'Ableton Live, Audio-Technica AT2020, Ozone 7',
    buttonLink: "https://brianfrulla.bandcamp.com/album/rooftops",
    buttonText: "View On Bandcamp",
    key: 7
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
export default class Projects extends React.Component {

  constructor(){
    super();
    this.state = {modalOpen: false, project:{}}
  }

  //color, picture, headerText, subHeaderText, bodyText, buttonLink

  renderProjects() {


  //   <SingleProject
  //   color={project.color}
  //   picture={project.picture}
  //   headerText={project.headerText}
  //   subHeaderText={project.subHeaderText}
  //   bodyText={project.bodyText}
  //   buttonLink={project.buttonLink}
  //   technologiesText={project.technologiesText}
  //   buttonText={project.buttonText}
  //   anchorId={project.anchorId}
  //   key={project.key}
  //   theKey={project.key}
  //   />
  // )
    const listItems = projects.map((project, index)=>{
      return(
        <GridListTile key={project.key} className="project-item" onClick={(e)=>this.showProject(index)}>
        <img src={project.picture}/>
        <GridListTileBar title={project.headerText}/>
          </GridListTile>
        )

    });
    return listItems
  }

  showProject = (index) =>{
     let project = projects[index];
     this.setState({project: project, modalOpen: true});
  }

  handleClose = () =>{
    this.setState({modalOpen: false})
  }


  render() {
    let numCols;
    if(this.props.width < 500){
      numCols = 2;
    }
    else if(this.props.width < 800){
      numCols = 3;
    } else {
      numCols = 4;
    }
    return (
      <div className="projects-container">
      <GridList cellHeight={160} cols={numCols} className="projects-grid" spacing={6}>
      {this.renderProjects()}
      </GridList>
      <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <SingleProject
        color={this.state.project.color}
        picture={this.state.project.picture}
        headerText={this.state.project.headerText}
        subHeaderText={this.state.project.subHeaderText}
        bodyText={this.state.project.bodyText}
        buttonLink={this.state.project.buttonLink}
        technologiesText={this.state.project.technologiesText}
        buttonText={this.state.project.buttonText}
        anchorId={this.state.project.anchorId}
        key={this.state.project.key}
        theKey={this.state.project.key}
        />
      </Modal>

      </div>
    )
  }

}
