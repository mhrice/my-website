import React from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
//import Logo from "../resources/UCSD-logo.png";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6



export default class MyCard extends React.Component {

  constructor(){
    super();
    this.state = {
      mounted: false,
      height: {}
    }
  }

    componentDidMount() {
        this.setState({ mounted: true});
        setTimeout(()=>{
          this.setState({height: {height:'15%'}})
        }, 500)
    }


  render(){
    var{Title, Logo, cardTitle, cardSubtitle, cardText} = this.props;
    var child;
    if(this.state.mounted){
      child = (
      <Card className="card" key={1} style={this.state.height} onExpandChange= { () =>{
        this.setState({
          height: {}
        });

      } } >
      <CardHeader
        title={Title}
        avatar={Logo}
        actAsExpander={true}
        showExpandableButton={true}
         />
        {cardTitle &&<CardTitle title={cardTitle} subtitle={cardSubtitle} expandable={true}  /> }
        <CardText expandable={true}>
        {cardText}
        </CardText>
      </Card>
      )
    }
    return (
      <ReactCSSTransitionGroup
      transitionName="example"
      transitionEnterTimeout={700}
      transitionLeaveTimeout={300}
      >
                {child}
      </ReactCSSTransitionGroup>
  );
}

}
