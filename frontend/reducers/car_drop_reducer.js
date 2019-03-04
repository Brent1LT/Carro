import {OPEN_CAR_DROP, CLOSE_CAR_DROP} from '../actions/listing_drop_actions';

const carDropReducer = (oldState = false, action) => {
  switch (action.type) {
    case OPEN_CAR_DROP:
      return true;
    case CLOSE_CAR_DROP:
      return false;
    default:
      return oldState;
  }
};

export default carDropReducer;