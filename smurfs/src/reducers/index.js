/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCH_DATA, FETCH_DATA_SUCCESS, ADD_SMURF, ADD_SMURF_SUCCESS} from '../actions';
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const intialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const rootReducer = (state = intialState, action) => {
  switch(action.type){
    case FETCH_DATA:
      return{
        ...state,
        fetchingSmurfs: true,
        error: ''
      }
    
      case FETCH_DATA_SUCCESS:
          return{
            ...state,
            fetchingSmurfs: false,
            smurfs: action.payload,
            error: '',
          }
      
      case ADD_SMURF:
        return{
          ...state,
          addingSmurf: true,
          error: ''
        }

      case ADD_SMURF_SUCCESS:
        return{
          ...state,
          addingSmurf: false,
          smurfs: action.payload,
          error: ''
        }
      
        default:
          return state;
      }
  };

export default rootReducer;