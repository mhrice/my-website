import React from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
//import Logo from "../resources/UCSD-logo.png";


export default class MyCard extends React.Component {



  render(){
    var{Title, Logo, cardTitle, cardSubtitle, cardText, secondCardTitle, secondCardText} = this.props;
    console.log(Logo)
    return (
    <Card className="card">
    <CardHeader
      title={Title}
      avatar={Logo}
      actAsExpander={true}
      showExpandableButton={true} />
      <CardTitle title={cardTitle} subtitle={cardSubtitle} expandable={true} />
      <CardText expandable={true}>
      {cardText}
      </CardText>
      <CardTitle title={secondCardTitle} expandable={true} />
      <CardText expandable={true}>
      {secondCardText}
      </CardText>
    </Card>
  );
}

}
