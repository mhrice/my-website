import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

let MAXENGINEERINGSKILLS = {
    "C/C++": 60,
    "Java": 60,
    "JavaScript/ES7": 80,
    "Linux": 60,
    "MATLAB": 50,
    "Python": 70,
    "System Verilog/Digital Design": 60,
    "Raspberry Pi/IOT": 80,
    "ReactJS": 90
}

let EngineeringSkills = {
  "C/C++": 0,
  "Java": 0,
  "JavaScript/ES7": 0,
  "Linux": 0,
  "MATLAB": 0,
  "Python": 0,
  "System Verilog/Digital Design": 0,
  "Raspberry Pi/IOT": 0,
  "ReactJS": 0
}

let MAXARTISTRYSKILLS = {
    "Ableton Live": 70,
    "Live Sound": 90,
    "Piano": 70,
    "Pure Data": 80,
    "Sound Design": 60,
    "Web Design": 50
}
let ArtistrySkills = {
    "Ableton Live": 0,
    "Live Sound": 0,
    "Piano": 0,
    "Pure Data": 0,
    "Sound Design": 0,
    "Web Design": 0
}

const styles = {
  root1: {
    //background: 'linear-gradient(45deg, #E51C00 30%, #FB5B5D 90%)',
    background: '#FB5B5D',
    // width: '50%',
    borderRadius: 3,
    border: 0,
    height: 16,
    padding: '0 30px',
    marginBottom: '7px'
  },
  root2: {
    //background: 'linear-gradient(45deg, #E51C00 30%, #FB5B5D 90%)',
    background: '#77e3ce',
    // width: '50%',
    borderRadius: 3,
    border: 0,
    height: 16,
    padding: '0 30px',
    marginBottom: '7px'
  },
   //barColorPrimary: {background: 'linear-gradient(45deg, #10C8B8 30%, #64DEA2 90%)'}
     barColorPrimary1: {background: "#E51C00"},
     barColorPrimary2: {background: "#10C8B8"}


}

class Skills extends React.Component {

  componentDidMount(){
    let x = setInterval(()=>{
        Object.keys(EngineeringSkills).map((skill)=>{
              if (EngineeringSkills[skill] < MAXENGINEERINGSKILLS[skill]){
                EngineeringSkills[skill] = EngineeringSkills[skill]+10;
              }
            })
        Object.keys(ArtistrySkills).map((skill)=>{
              if (ArtistrySkills[skill] < MAXARTISTRYSKILLS[skill]){
                ArtistrySkills[skill] = ArtistrySkills[skill]+10;
              }
            })
            this.forceUpdate();
    }, 20)
    setTimeout(()=>{
      clearInterval(x);
    }, 2000);
  }
  render(){
    const {classes} = this.props;
    return (
      <div className="skills-container">
        <div className="skills-column">
          <div className="skill-category">Engineering</div>
          {Object.keys(EngineeringSkills).map((skill)=>{
            return (
              <React.Fragment key={skill}>
              <div>{skill}</div>
                <LinearProgress
                value = {EngineeringSkills[skill]}
                color='primary'
                variant='determinate' classes={{
                  root: classes.root1,
                  barColorPrimary: classes.barColorPrimary1
                }}
                />
              </React.Fragment>
            )
          })}
        </div>
        <div className="skills-column">
          <div className="skill-category">Artistry</div>
          {Object.keys(ArtistrySkills).map((skill)=>{
            return (
              <React.Fragment key={skill}>
              <div>{skill}</div>
                <LinearProgress
                value = {ArtistrySkills[skill]}
                color='primary'
                variant='determinate' classes={{
                  root: classes.root2,
                  barColorPrimary: classes.barColorPrimary2
                }}
                />
              </React.Fragment>
            )
          })}
          </div>
      </div>
    )
  }
}
export default withStyles(styles)(Skills);
