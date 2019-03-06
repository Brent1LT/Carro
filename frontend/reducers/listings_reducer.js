import {RECEIVE_ALL_LISTINGS, RECEIVE_LISTING, REMOVE_LISTING} from '../actions/listing_actions';

const listingsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_ALL_LISTINGS:
      return Object.assign({}, oldState, action.listings);
    case RECEIVE_LISTING:
      return Object.assign({}, oldState, action.listings);
    case REMOVE_LISTING:
      let newState = Object.assign({}, oldState);
      delete newState[action.listingId];
      return newState;
    default:
      return oldState;
  }
};

export default listingsReducer;