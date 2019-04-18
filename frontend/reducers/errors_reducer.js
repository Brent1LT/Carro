import {combineReducers} from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import listingErrorsReducer from './listing_errors_reducer';
import carsErrorsReducer from './car_errors_reducer';
import bookingErrorsReducer from './booking_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  listings: listingErrorsReducer,
  cars: carsErrorsReducer,
  bookings: bookingErrorsReducer
});

export default errorsReducer;