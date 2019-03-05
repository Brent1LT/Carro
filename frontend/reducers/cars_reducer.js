import {RECEIVE_CAR, REMOVE_CAR} from '../actions/car_actions';
import { RECEIVE_LISTING } from '../actions/listing_actions';

const carsReducer = (oldState = {}, action) => {
  switch(action.type){
    case RECEIVE_LISTING:
      let car = Object.values(action.car)[0];
      return Object.assign({}, oldState, { [car.id]: car });
    case REMOVE_CAR:
      let newState = Object.assign({}, oldState);
      delete newState[action.carId];
      return newState;
    default:
      return oldState;
  }
}

export default carsReducer;
