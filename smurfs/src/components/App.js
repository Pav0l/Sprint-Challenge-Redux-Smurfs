import React, { Component } from 'react';
// import styled from 'styled-components';
import Header from './Header';
import SmurfList from './SmurfList';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <SmurfList />
        
      </div>
    );
  }
}


