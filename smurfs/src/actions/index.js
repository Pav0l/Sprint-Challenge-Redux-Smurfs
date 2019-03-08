import axios from 'axios';

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

export const addSmurfs = (smurf) => dispatch => {
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
