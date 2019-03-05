import {OPEN_LISTING_DROP, CLOSE_LISTING_DROP} from '../actions/listing_drop_actions';

const listingDropReducer = (oldState = true, action) => {
  switch(action.type){
    case OPEN_LISTING_DROP:
      return true;
    case CLOSE_LISTING_DROP:
      return false;
    default:
      return oldState;
  }
};

export default listingDropReducer;