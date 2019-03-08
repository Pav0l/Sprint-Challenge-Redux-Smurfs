import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions/index';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';


class SmurfList extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }


  render() {
    return (
      <StyledList>
        <SmurfForm />

        <StyledSmurfs>        
          {
            this.props.loading
            ? <div>Looking for some Smurfs in the woods...</div>
            : this.props.error
              ? <div>Oh no! There seems to be an issue: {this.props.error}</div>
              :
              this.props.smurfs.map(smurf => (
                <Smurf
                  key={smurf.id}
                  smurf={smurf}                  
                />
              ))
          }
        </StyledSmurfs>
      </StyledList>
    );
  }
}

const mapStateToProps = state => {
  return ({
    smurfs: state.smurfs,
    loading: state.loading,
    error: state.error,
  })
}

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);


const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSmurfs = styled.div`
  display: flex;
  flex-flow: wrap row;
`;