import React, { Component } from 'react';
// import styled from 'styled-components';


export default class Smurf extends Component {
  render() {
    return (
      <div>
        <div>{this.props.smurf.name}</div>
        <div>{this.props.smurf.age}</div>
        <div>{this.props.smurf.height}</div>
      </div>
    );
  }
}


