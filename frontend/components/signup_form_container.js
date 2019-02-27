import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/session_actions';
import SessionForm from './session_form';
import {openModal, closeModal} from '../actions/modal_actions';

const mapStateToProps = state => {
  return ({
    session: state.session,
    formType: 'Signup',
    errors: []
  });
};

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal('Login'))}>
      Login
    </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);