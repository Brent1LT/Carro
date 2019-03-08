import {connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import ProfileDropdown from './nav_bar/profile_dropdown';
const mapStateToProps = state => {
  return ({
    errors: [],
    users: state.entities.users,
    currentUserId: state.session.currentUserId
  });
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});


export default connect(mapStateToProps, mapDispatchToProps)(ProfileDropdown);
