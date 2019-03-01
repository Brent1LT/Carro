import {RECEIVE_LISTING_ERRORS } from '../actions/listing_actions';

const listingErrorsReducer = (oldState = [], action) => {
  switch(action.type){
    case RECEIVE_LISTING_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};

export default listingErrorsReducer;