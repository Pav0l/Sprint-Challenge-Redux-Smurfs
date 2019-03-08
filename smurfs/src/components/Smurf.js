import React, { Component } from 'react';
import styled from 'styled-components';


export default class Smurf extends Component {
  render() {
    const { name, age, height, image } = this.props.smurf;

    return (
      <StyledContainer>
        <img src={image} alt={`${name} img`} />
        <SmurfName>{name}</SmurfName>
        <div>Age: {age}</div>
        <div>Height: {height}</div>
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 4px;
  padding: 10px;
  max-width: 200px;
  margin: 10px;
`;

const SmurfName = styled.div`
  font-weight: 1000;
`;
