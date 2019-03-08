import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { postSmurf, updateSmurfForm  } from '../actions/index';

class SmurfForm extends Component {
  onClickHandler = (e) => {
    e.preventDefault();
    this.props.postSmurf(this.props.smurfForm);    
    this.props.updateSmurfForm({ name: '', age:'', height:'', image:'' });
  }

  onChangeHandler = (e) => {
    this.props.updateSmurfForm({ ...this.props.smurfForm , [e.target.name]: e.target.value });
  }

  render() {
    return (
      <StyledForm autoComplete="off">

        <input
          value={this.props.smurfForm.name}
          onChange={this.onChangeHandler}
          name="name" type="text" placeholder="Enter Smurfs name">
        </input>
        <input
          value={this.props.smurfForm.age}
          onChange={this.onChangeHandler}
          name="age" type="text" placeholder="Enter Smurfs age">
        </input>
        <input
          value={this.props.smurfForm.height}
          onChange={this.onChangeHandler}
          name="height" type="text" placeholder="Enter Smurfs height">
        </input>
        <input
          value={this.props.smurfForm.image}
          onChange={this.onChangeHandler}
          name="image" type="text" placeholder="Enter Smurfs image URL">
        </input>

        <button onClick={this.onClickHandler}>Add smurf!</button>

      </StyledForm>
    );
  }
}

const mapStateToProps = state => {
  return ({
    smurfForm: state.smurfForm,
  })
}

export default connect(mapStateToProps, { postSmurf, updateSmurfForm })(SmurfForm);


const StyledForm = styled.form`
  border-top: 1px solid rgb(86, 170, 255);
  border-bottom: 1px solid rgb(86, 170, 255);
  border-radius: 4px;
  margin: 1rem auto;
  display: flex;

  input {
    padding: 20px;
    border: none;
    margin-left: 10px;
    font-size: 1.2rem;
  }

  button {
    padding: 15px;
    background-color: rgb(86, 170, 255);
    border: 1px solid rgb(86, 170, 255);
    color: white;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
  }
`;