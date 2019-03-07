import {connect } from 'react-redux';
import ListingForm from './listing_form';
import { updateListing, fetchListing } from '../../actions/listing_actions';

const mapStateToProps = state => {
  let listing = state.entities.listings[ownProps.match.params.listingId];
  return ({
    formType: 'update listing',
    listing,
    
  });
};

const mapDispatchToProps = dispatch => ({
  updateListing: listing => dispatch(updateListing(listing)),
  fetchListing: id => dispatch(fetchListing(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(ListingForm);