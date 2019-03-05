import {connect} from 'react-redux';
import ListingForm from './listing_form';
import {createListing} from '../../actions/listing_actions';
import {createCar} from '../../actions/car_actions';
import { openListingDrop, closeListingDrop, openCarDrop, closeCarDrop} from '../../actions/listing_drop_actions';


const mapStateToProps = state => {
  return ({
    listingErrors: state.errors.listing,
    carErrors: state.errors.car,
    listingDrop: state.ui.listingDrop,
    carDrop: state.ui.carDrop,
  });
};

const mapDispatchToProps = dispatch => ({
  createListing: (listing, car) => dispatch(createListing(listing, car)),
  openListingDrop: () => dispatch(openListingDrop()),
  closeListingDrop: () => dispatch(closeListingDrop()),
  openCarDrop: () => dispatch(openCarDrop()),
  closeCarDrop: () => dispatch(closeCarDrop())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingForm);