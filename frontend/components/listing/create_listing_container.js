import { connect } from 'react-redux';
import ListingPostForm from './create_listing_form';
import { createListing } from '../../actions/listing_actions';


const mapStateToProps = state => {
  return ({
    listingErrors: state.errors.listing,
    listing: {
      guidelines: '',
      tripCounter: 0,
      price: 0,
      extras: '',
      location: ''
    },
    formType: "create listing",
    userId: state.session.currentUserId
  });
};

const mapDispatchToProps = dispatch => ({
  createListing: listing => dispatch(createListing(listing))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingPostForm);