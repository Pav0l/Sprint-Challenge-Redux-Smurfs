import axios from 'axios';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';


const url = "http://localhost:3333/smurfs"

export const fetchSmurfs = () => dispatch => {
  dispatch(onError(null));
  dispatch(onLoad(true));

  axios.get(url)
    .then(res => dispatch(onFetch(res.data)))
    .catch(err => dispatch(onError(err.message)))
    .finally(() => dispatch(onLoad(false)));
}

export const onFetch = (smurfs) => {
  return ({
    type: FETCH_SMURFS,
    payload: smurfs,
  });
}

export const onLoad = (bool) => {
  return ({
    type: LOADING,
    payload: bool,
  });
}

export const onError = (err) => {
  return ({
    type: ERROR,
    payload: err,
  });
}
