import {connect} from 'react-redux';
import ListingForm from './listing_form';
import {createListing} from '../../actions/listing_actions';
import { openListingDrop, closeListingDrop, openCarDrop, closeCarDrop, openPhotoDrop, closePhotoDrop} from '../../actions/listing_drop_actions';


const mapStateToProps = state => {
  return ({
    listingErrors: state.errors.listing,
    carErrors: state.errors.car,
    listingDrop: state.ui.listingDrop,
    carDrop: state.ui.carDrop,
    photoDrop: state.ui.photoDrop
  });
};

const mapDispatchToProps = dispatch => ({
  createListing: (listing, car) => dispatch(createListing(listing, car)),
  openListingDrop: () => dispatch(openListingDrop()),
  closeListingDrop: () => dispatch(closeListingDrop()),
  openCarDrop: () => dispatch(openCarDrop()),
  closeCarDrop: () => dispatch(closeCarDrop()),
  openPhotoDrop: () => dispatch(openPhotoDrop()),
  closePhotoDrop: () => dispatch(closePhotoDrop())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingForm);