import {RECEIVE_ALL_LISTINGS, RECEIVE_LISTING, REMOVE_LISTING} from '../actions/listing_actions';

const listingsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_ALL_LISTINGS:
      return Object.assign({}, oldState, action.listings);
    case RECEIVE_LISTING:
      let listing = Object.values(action.listing);
      return Object.assign({}, oldState, {[listing.id]: listing});
    case REMOVE_LISTING:
      let newState = Object.values({}, oldState);
      let unwanted = Object.values(action.listing); 
      delete newState[unwanted.id];
      return newState;
    default:
      return oldState;
  }
};

export default listingsReducer;