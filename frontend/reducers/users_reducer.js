import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import { RECEIVE_LISTING } from '../actions/listing_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_LISTING:
      return Object.assign({}, oldState, action.users);
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, action.currentUser);
    default:
      return oldState;
  }
};

export default usersReducer;