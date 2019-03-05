import {connect} from 'react-redux';
import FileUpload from './file_upload';
import { closeListingDrop, closeCarDrop, closePhotoDrop } from '../../actions/listing_drop_actions';

const mapStateToProps = state => {
  return ({
    listingErrors: state.errors.listings,
    photoDrop: state.ui.photoDrop
  });
};

const mapDispatchToProps = dispatch => ({
  closeListingDrop: () => dispatch(closeListingDrop()),
  closeCarDrop: () => dispatch(closeCarDrop()),
  closePhotoDrop: () => dispatch(closePhotoDrop())
});

export default connect(mapStateToProps, mapDispatchToProps)(FileUpload);
