import {RECEIVE_ALL_BOOKINGS, RECEIVE_BOOKING, REMOVE_BOOKING} from '../actions/booking_actions';

const bookingsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_ALL_BOOKINGS:
      return Object.assign({}, oldState, action.bookings);
    case RECEIVE_BOOKING:
      return Object.assign({}, oldState, action.booking);
    case REMOVE_BOOKING:
      let newState = Object.assign({}, oldState);
      delete newState[action.bookingId];
      return newState;
    default:
      return oldState;
  }
};

export default bookingsReducer;