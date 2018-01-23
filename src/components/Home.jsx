import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import finishedFile from '../resources/IntroToAudioDSPWebFinished';
import wipFile from '../resources/IntroToAudioDSPWebPart1';

var FileSaver = require('file-saver');

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

      <a className="home-link" onClick={()=>this.downloadFile("Part1")}>Intro To Audio DSP Part1</a>
       <br></br>
       <a className="home-link" onClick={()=>this.downloadFile("Finished")}>Intro To Audio DSP Finished</a>

      <p className = "home-paragraph"> I specialize in&nbsp;
      <Link className="home-link" to={"/projects#web-dev"} >web development</Link>,&nbsp;
      <Link className="home-link" to={"/projects#audio"}>audio technology</Link>, and&nbsp;
      <Link className="home-link" to={"/projects#embedded"}>embedded systems</Link>
       </p>
      </div>

      </div>
    )
  }

}
