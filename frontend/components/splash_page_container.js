import {connect} from 'react-redux';
import {fetchListings} from '../actions/listing_actions';
import SplashPage from './splash_page';

const mapStateToProps = state => {
  return ({
    listings: Object.values(state.entities.listings)
  });
};

const mapDispatchToProps = dispatch => ({
  fetchListings: () => dispatch(fetchListings())
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);