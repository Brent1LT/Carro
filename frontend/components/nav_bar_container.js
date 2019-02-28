import {openModal, closeModal} from "../actions/modal_actions";
import NavBar from './nav_bar';
import { connect } from "react-redux";

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUserId)
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

