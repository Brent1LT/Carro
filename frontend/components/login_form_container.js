import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../actions/modal_actions';

const mapStateToProps = state => {
  return ({
    session: state.session,
    formType: 'Login',
    errors: []
  });
};

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal('Signup'))}>
      Signup
    </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);