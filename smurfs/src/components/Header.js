import React, { Component } from 'react';
import styled from 'styled-components';


export default class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <h1>Welcome to Smurf Landia!</h1>
      </HeaderContainer>
    );
  }
}

const HeaderContainer = styled.div`
  text-align: center;
  color:rgb(86, 170, 255);
`; 
