import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import listingsReducer from './listings_reducer';
import carsReducer from './cars_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  listings: listingsReducer,
  cars: carsReducer 
});

export default entitiesReducer;