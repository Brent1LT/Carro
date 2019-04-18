import {RECEIVE_BOOKING_ERRORS} from '../actions/booking_actions';

const bookingErrorsReducer = (oldState = [], action) => {
  switch(action.type){
    case RECEIVE_BOOKING_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};

export default bookingErrorsReducer;