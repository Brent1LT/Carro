import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';

const sessionReducer = (oldState = {currentUserId: false}, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      let user = Object.values(action.currentUser)[0];
      return {currentUserId: user.id};
    case LOGOUT_CURRENT_USER:
      return {currentUserId: false};
    default:
      return oldState;
  }
};

export default sessionReducer;