import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchSmurfs, addSmurfs } from '../actions/index';
import Smurf from './Smurf';


class SmurfList extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  // nameRef = React.createRef();
  // ageRef = React.createRef();
  // heightRef = React.createRef();
  // imageRef = React.createRef();

  onClickHandler = (e) => {
    e.preventDefault();
    // const smurfName = this.nameRef.current.value;
    // const smurfAge = this.ageRef.current.value;
    // const smurfHeight = this.heightRef.current.value;
    // const smurfImage = this.imageRef.current.value;

    // const newSmurf = {
    //   name: smurfName,
    //   age: smurfAge,
    //   height: smurfHeight,
    //   image: smurfImage,
    // }

    const newSmurf = {
        name: "Smurfette",
        age: "130",
        height: "8cm",
        image: "https://vignette.wikia.nocookie.net/smurfs/images/b/b7/Smurfette_old.jpg/revision/latest?cb=20090610000054",
      }

    this.props.addSmurfs(newSmurf);
  }


  render() {
    return (
      <StyledList>
        <form>
          <input /*ref={this.smurfName} */ type="text" placeholder="Enter Smurfs name"></input>
          <input /*ref={this.smurfAge} */ type="text" placeholder="Enter Smurfs age"></input>
          <input /*ref={this.smurfHeight} */ type="text" placeholder="Enter Smurfs height"></input>
          <input /*ref={this.smurfImage} */ type="text" placeholder="Enter Smurfs image URL"></input>

          <button onClick={this.onClickHandler}>Add smurf!</button>
        </form>

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

export default connect(mapStateToProps, { fetchSmurfs, addSmurfs })(SmurfList);


const StyledList = styled.div`
`;