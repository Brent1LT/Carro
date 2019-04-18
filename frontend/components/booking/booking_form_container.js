import {connect} from 'react-redux';
import BookingForm from './booking_form';
import {createBooking, fetchBookings} from '../../actions/booking_actions';
import {openModal} from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    listing: ownProps.listing,
    listingId: ownProps.listing.id,
    bookings: state.entities.bookings
  });
};

const mapDispatchToProps = dispatch => ({
  createBooking: (booking) => dispatch(createBooking(booking)),
  fetchBookings: (id) => dispatch(fetchBookings(id)),
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);