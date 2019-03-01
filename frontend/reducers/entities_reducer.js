import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import listingsReducer from './listings_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  listingsReducer: listingsReducer
});

export default entitiesReducer;