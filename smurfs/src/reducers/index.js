import * as types from '../actions/index';
import { combineReducers } from 'redux';

export const smurfs = (smurfs=[], action) => {
  switch (action.type) {
    case types.FETCH_SMURFS:
      return action.payload;
  
    default:
      return smurfs;
  }
}

export const smurfForm = (smurfForm={ name: '', age:'', height:'', image:'' }, action) => {
  switch (action.type) {
    case types.UPDATE_SMURF_FORM:
      return action.payload;
  
    default:
      return smurfForm;
  }
}

export const editingSmurf = (editSmurf=false, action) => {
  switch (action.type) {
    case types.EDITING_SMURF:
      return action.payload;
  
    default:
      return editSmurf;
  }
}

export const currentSmurf = (currentSmurf={ name: '', age:'', height:'' }, action) => {
  switch (action.type) {
    case types.CURRENT_SMURF_TO_EDIT:
      return action.payload;
  
    default:
      return currentSmurf;
  }
}

export const loading = (loading=false, action) => {
  switch (action.type) {
    case types.LOADING:
      return action.payload;
  
    default:
      return loading;
  }
}

export const error = (error=null, action) => {
  switch (action.type) {
    case types.ERROR:
      return action.payload;
  
    default:
      return error;
  }
}

const rootReducer = combineReducers({
  smurfs,
  loading,
  error,
  smurfForm,
  editingSmurf,
  currentSmurf,
});

export default rootReducer;