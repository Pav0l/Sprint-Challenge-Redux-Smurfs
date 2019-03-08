import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const UPDATE_SMURF_FORM = 'UPDATE_SMURF_FORM';
export const EDITING_SMURF = 'EDITING_SMURF';
export const CURRENT_SMURF_TO_EDIT = 'CURRENT_SMURF_TO_EDIT';


const url = "http://localhost:3333/smurfs"

export const fetchSmurfs = () => dispatch => {
  dispatch(onError(null));
  dispatch(onLoad(true));

  axios.get(url)
    .then(res => dispatch(onFetch(res.data)))
    .catch(err => dispatch(onError(err.message)))
    .finally(() => dispatch(onLoad(false)));
}

export const postSmurf = (smurf) => dispatch => {
  dispatch(onError(null));
  dispatch(onLoad(true));

  axios({
    method: 'post',
    url: url,
    data: JSON.stringify(smurf),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => dispatch(onFetch(res.data)))
    .catch(err => dispatch(onError(err.message)))
    .finally(() => dispatch(onLoad(false)));
}

export const deleteSmurf = id => dispatch => {
  dispatch(onError(null));
  dispatch(onLoad(true));

  axios.delete(`${url}/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => dispatch(onFetch(res.data)))
    .catch(err => dispatch(onError(err.message)))
    .finally(() => dispatch(onLoad(false)));
}

export const putSmurf = (id, smurf) => dispatch => {
  dispatch(onError(null));
  dispatch(onLoad(true));

  axios.put(`${url}/${id}`, JSON.stringify(smurf), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => dispatch(onFetch(res.data)))
    .catch(err => dispatch(onError(err.message)))
    .finally(() => dispatch(onLoad(false)));
}

export const updateSmurfForm = (smurf) => {
  return ({
    type: UPDATE_SMURF_FORM,
    payload: smurf,
  });
}

export const editSmurf = (bool) => {
  return ({
    type: EDITING_SMURF,
    payload: bool,
  });
}

export const currentSmurfToEdit = (smurf) => {
  return ({
    type: CURRENT_SMURF_TO_EDIT,
    payload: {
      name: smurf.name,
      age: smurf.age,
      height: smurf.height
    },
  });
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
