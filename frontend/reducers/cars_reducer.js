import {RECEIVE_CAR, REMOVE_CAR} from '../actions/car_actions';

const carsReducer = (oldState = {}, action) => {
  switch(action.type){
    case RECEIVE_CAR:
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
