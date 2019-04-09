import {connect} from 'react-redux';
import ListingShow from './listing_show';
import { fetchListing, deleteListing, updateListing } from '../../actions/listing_actions';

const mapStateToProps = (state, ownProps) => {
  let listing = state.entities.listings[ownProps.match.params.listingId];
  let car;
  if (listing){
    car = state.entities.cars[listing.carId];
  }
  return({
    listing,
    car,
    currUser: state.session.currentUserId
  });
};

const mapDispatchToProps = dispatch => ({
  fetchListing: id => dispatch(fetchListing(id)),
  deleteListing: id => dispatch(deleteListing(id)),
  updateListing: listing => dispatch(updateListing(listing))
});


export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);