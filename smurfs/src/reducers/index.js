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

const rootReducer = combineReducers({ smurfs, loading, error });

export default rootReducer;