import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { deleteSmurf, editSmurf, currentSmurfToEdit, putSmurf } from '../actions/index';


export class Smurf extends Component {

  onChangeHandler = e => {
    this.props.currentSmurfToEdit({
      ...this.props.currentSmurf,
      [e.target.name]: e.target.value
    })
  }

  onStartEditingHandler = () => {
    this.props.editSmurf(true);
    this.props.currentSmurfToEdit(this.props.smurf)
  }

  
  onDoneEditingHandler = () => {
    this.props.putSmurf(this.props.smurf.id, this.props.currentSmurf);
    this.props.editSmurf(false);
  }

  render() {
    const { name, age, height, image, id } = this.props.smurf;

    return (
      <StyledContainer>
        <DelBtn
          onClick={() => this.props.deleteSmurf(id)}>
          <img src="https://image.flaticon.com/icons/svg/1214/1214428.svg" alt="icon"/> 
        </DelBtn>

        <EditBtn
          onClick={() => this.onStartEditingHandler()}
        >
        <img src="https://image.flaticon.com/icons/svg/1159/1159633.svg" alt="icon"/>
        </EditBtn>
        <img src={image} alt={`${name} img`} />

        {
          !this.props.editingSmurf
          ? 
            (<div>
              <SmurfName>{name}</SmurfName>
              <div>Age: {age}</div>
              <div>Height: {height}</div>
            </div>)
          :
            (<EditContentContainer>
              <input
                defaultValue={name}
                onChange={this.onChangeHandler}
                name="name" type="text"
              >
              </input>
              <input
                defaultValue={age}
                onChange={this.onChangeHandler}
                name="age" type="text"
              >
              </input>
              <input
                defaultValue={height}
                onChange={this.onChangeHandler}
                name="height" type="text"
              >
              </input>
              <DoneBtn
                onClick={() => this.onDoneEditingHandler()}
              >
              <img src="https://image.flaticon.com/icons/svg/811/811868.svg" alt="icon"/>
              </DoneBtn>
              
            </EditContentContainer>)
        }
      </StyledContainer>
    );
  }
}

const mapStateToProps = state => {
  return ({
    editingSmurf: state.editingSmurf,
    currentSmurf: state.currentSmurf
  })
}

export default connect(mapStateToProps,
  { deleteSmurf, editSmurf, currentSmurfToEdit, putSmurf })(Smurf);



const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid rgb(86, 170, 255);
  box-shadow: 2px 2px 5px rgb(86, 170, 255);
  border-radius: 4px;
  padding: 10px;
  max-width: 200px;
  margin: 10px;
  text-align: center;
  position: relative;
`;

const SmurfName = styled.div`
  font-weight: 1000;
`;

const StlyedBtn = styled.button`
  position: absolute;
  border: none;
  height: 30px;
  width: 30px;
  opacity: 0.3;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    background-color: white;
  }

  img {
    max-width: 150%;
  }
`;

const DelBtn = styled(StlyedBtn)`
  right: 5px;
  top: 5px;
`;

const EditBtn = styled(StlyedBtn)`
  left: 5px;
  top: 5px;
`;

const DoneBtn = styled(StlyedBtn)`
  right: 5px;
  bottom: 5px;
  height: 50px;
  width: 50px;
  img {
    max-width: 200%;
  }
`;

const EditContentContainer = styled.div`
  input {
    border: none;
    text-align: center;
    font-size: 1rem;
  }
`;
