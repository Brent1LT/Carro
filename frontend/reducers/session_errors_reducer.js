import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {OPEN_MODAL} from '../actions/modal_actions'

const sessionErrorsReducer = (oldState = [], action) => {
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_ERRORS:
      return action.errors;
    case OPEN_MODAL:
      return [];
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;