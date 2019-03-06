import {connect} from 'react-redux';
import ListingShow from './listing_show';
import { fetchListing, deleteListing, updateListing } from '../../actions/listing_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    listing: state.entities.listings[ownProps.match.params.listingId],
    // car: state.entities.cars.listingId?
  });
};

const mapDispatchToProps = dispatch => ({
  fetchListing: id => dispatch(fetchListing(id)),
  deleteListing: id => dispatch(deleteListing(id)),
  updateListing: listing => dispatch(updateListing(listing))
});


export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);