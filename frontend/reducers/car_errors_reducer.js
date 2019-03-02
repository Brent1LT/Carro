import {RECEIVE_CAR_ERRORS} from '../actions/car_actions';

const carErrorsReducer = (oldState =[], action) => {
  switch(action.type){
    case RECEIVE_CAR_ERRORS: 
      return action.errors
    default:  
      return oldState;
  }
};

export default carErrorsReducer;