/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';


export const getData = () => dispatch => {
  dispatch({
    type: FETCH_DATA
  });
  axios
    .get('http://localhost:3333')
    .then(res => {
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err)
    });
}

export const addSmurf = smurf => dispatch => {
  dispatch({
    type: ADD_SMURF
  });
  axios
    .post('http://localhost:3333', smurf)
    .then(res => {
      dispatch({
        type: ADD_SMURF_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
}

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
