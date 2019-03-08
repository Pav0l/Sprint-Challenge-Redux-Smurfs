import React, { Component } from 'react';
// import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions/index';
import Smurf from './Smurf';


class SmurfList extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div>

        {
          this.props.smurfs.map(smurf => (
            <Smurf
              key={smurf.id}
              smurf={smurf}
            />
          ))
        }
        
      </div>
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
