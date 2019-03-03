import {connect} from 'react-redux';
import ListingForm from './listing_form';
import {createListing} from '../../actions/listing_actions';
import {createCar} from '../../actions/car_actions';


const mapStateToProps = state => {
  return ({
    listingErrors: state.errors.listing,
    carErrors: state.errors.car
  });
};

// const mapDispatchToProps = dispatch => ({
//   createCar: (car) => dispatch(createCar(car)),
//   createListing: listing => dispatch(createListing(listing))
// });

export default connect(mapStateToProps, null)(ListingForm);