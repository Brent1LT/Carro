import { OPEN_PHOTO_DROP, CLOSE_PHOTO_DROP } from '../actions/listing_drop_actions';

const photoDropReducer = (oldState = false, action) => {
  switch (action.type) {
    case OPEN_PHOTO_DROP:
      return true;
    case CLOSE_PHOTO_DROP:
      return false;
    default:
      return oldState;
  }
};

export default photoDropReducer;