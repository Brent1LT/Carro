import { connect } from 'react-redux';
import ListingPostForm from './create_listing_form';
import { createListing } from '../../actions/listing_actions';
import { createCar } from '../../actions/car_actions';


const mapStateToProps = state => {
  return ({
    listingErrors: state.errors.listing,
    listing: {guidelines: '',
    tripCounter: 0,
    price: 0,
    extras: '',
    location: ''
  }
  });
};

// const mapDispatchToProps = dispatch => ({
//   createCar: (car) => dispatch(createCar(car)),
//   createListing: listing => dispatch(createListing(listing))
// });

export default connect(mapStateToProps, null)(ListingPostForm);