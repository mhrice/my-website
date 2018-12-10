import React from 'react';
import {Link } from 'react-router-dom';

import finishedFile from '../resources/IntroToAudioDSPWebFinished';
import wipFile from '../resources/IntroToAudioDSPWebPart1';

let FileSaver = require('file-saver');

export default class Home extends React.Component {

downloadFile(fileName){
  if(fileName==="Part1"){
    let file = new File([wipFile],'IntroToAudioDSPPart1.pd');
    FileSaver.saveAs(file);

  } else if(fileName==="Finished"){
    let file = new File([finishedFile],'IntroToAudioDSPFinished.pd');
    FileSaver.saveAs(file);
  }



}
  render() {
    return (
      <div className = "home-container">

      <div>
      <h1 className = "home-title-text">
      Matthew Rice
      </h1>

      {/*<a className="home-link" onClick={()=>this.downloadFile("Part1")}>Intro To Audio DSP Part1</a>*/}
       {/*<br></br>*/}
       {/*<a className="home-link" onClick={()=>this.downloadFile("Finished")}>Intro To Audio DSP Finished</a>*/}
       {/*}<a className="home-link" onClick={()=>this.downloadFile("APCSP")}> APCSP Files </a> */}
      <div className = "home-paragraph"> I specialize in&nbsp;
        <div className="home-link link1" >audio technology</div>&nbsp;
        <div className="home-link link2" >web development</div>&nbsp;
        <div className="home-link link3" >embedded systems</div>
     </div>
      </div>

      </div>
    )
  }

}
