import {connect } from 'react-redux';
import UpdateListingForm from './update_listing_form';
import { updateListing, fetchListing } from '../../actions/listing_actions';
import { openListingDrop, closeListingDrop } from '../../actions/listing_drop_actions';

const mapStateToProps = (state, ownProps) => {
  let listing = state.entities.listings[ownProps.match.params.listingId];
  return ({
    listing,
    listingDrop: state.ui.listingDrop
  });
};

const mapDispatchToProps = dispatch => ({
  updateListing: listing => dispatch(updateListing(listing)),
  fetchListing: id => dispatch(fetchListing(id)),
  openListingDrop: () => dispatch(openListingDrop()),
  closeListingDrop: () => dispatch(closeListingDrop())
});


export default connect(mapStateToProps, mapDispatchToProps)(UpdateListingForm);