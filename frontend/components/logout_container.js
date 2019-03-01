import {connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import ProfileDropdown from './nav_bar/profile_dropdown';
const mapStateToProps = state => {
  return ({
    session: state.session,
    errors: []
  });
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});


export default connect(mapStateToProps, mapDispatchToProps)(ProfileDropdown);
