import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardBody } from 'reactstrap';
import './Character.css'

class Character extends Component {
  constructor() {
    super();
    this.state = {}
  };

  render() {
    return (
      <div className="Character">
        <Card>
          <CardBody>
            <CardTitle className="prop">Name: {this.props.character.name}</CardTitle>
            <div className="prop">Height: {this.props.character.height}</div>
            <div className="prop">Mass: {this.props.character.mass}</div>
            <div className="prop">Hair Color: {this.props.character.hair_color}</div>
            <div className="prop">Skin Color: {this.props.character.skin_color}</div>
            <div className="prop">Eye Color: {this.props.character.eye_color}</div>
            <div className="prop">Birth Year: {this.props.character.birth_year}</div>
            <div className="prop">Gender: {this.props.character.gender}</div>
            <div className="prop">Home World: {this.props.character.homeworld}</div>
          </CardBody>
        </Card>
      </div>
    )
  };
}

export default Character;
