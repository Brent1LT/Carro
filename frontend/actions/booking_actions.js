import * as BookingApiUtil from '../util/booking_api_util';

export const RECEIVE_ALL_BOOKINGS = 'RECEIVE_ALL_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';

const receiveBookings = (bookings) => ({
  type: RECEIVE_ALL_BOOKINGS,
  bookings
});

const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});

const removeBooking = bookingId => ({
  type: REMOVE_BOOKING,
  bookingId
});

const receiveErrors = errors => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
});

export const fetchBookings = (id) => dispatch => (
  BookingApiUtil.fetchBookings(id)
    .then(bookings => dispatch(receiveBookings(bookings)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const createBooking = booking => dispatch => (
  BookingApiUtil.createBooking(booking)
    .then(booking => dispatch(receiveBooking(booking)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const deleteBooking = id => dispatch => (
  BookingApiUtil.deleteBooking(id)
    .then(() => dispatch(removeBooking(id)))
);