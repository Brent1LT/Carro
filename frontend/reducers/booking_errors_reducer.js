import {RECEIVE_BOOKING_ERRORS, RECEIVE_BOOKING} from '../actions/booking_actions';

const bookingErrorsReducer = (oldState = [], action) => {
  switch(action.type){
    case RECEIVE_BOOKING_ERRORS:
      return action.errors;
    case RECEIVE_BOOKING:
      return [];
    default:
      return oldState;
  }
};

export default bookingErrorsReducer;