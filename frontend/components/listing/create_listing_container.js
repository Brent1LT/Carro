import { connect } from 'react-redux';
import ListingPostForm from './create_listing_form';
import { openCarDrop, closeListingDrop } from '../../actions/listing_drop_actions';


const mapStateToProps = state => {
  return ({
    listingDrop: state.ui.listingDrop,
    listingErrors: state.errors.listing
  });
};

const mapDispatchToProps = dispatch => ({
  openCarDrop: () => dispatch(openCarDrop()),
  closeListingDrop: () => dispatch(closeListingDrop())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingPostForm);