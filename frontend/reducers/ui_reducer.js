import modalReducer from './modal_reducer';
import {combineReducers} from 'redux';
import listingDropReducer from './listing_drop_reducer';
import carDropReducer from './car_drop_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  listingDrop: listingDropReducer,
  carDrop: carDropReducer
});

export default uiReducer;