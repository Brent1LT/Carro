import {RECEIVE_CAR, REMOVE_CAR} from '../actions/car_actions';
import { RECEIVE_LISTING, RECEIVE_ALL_LISTINGS } from '../actions/listing_actions';

const carsReducer = (oldState = {}, action) => {
  switch(action.type){
    case RECEIVE_ALL_LISTINGS:
    case RECEIVE_LISTING:
      return Object.assign({}, oldState, action.cars);
    case REMOVE_CAR:
      let newState = Object.assign({}, oldState);
      delete newState[action.carId];
      return newState;
    default:
      return oldState;
  }
}

export default carsReducer;
