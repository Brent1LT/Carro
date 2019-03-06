import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../actions/modal_actions';

const mapStateToProps = state => {
  return ({
    formType: 'Log in',
    errors: state.errors.session
  });
};

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  otherForm: (
    <div className='switch-seperator'>
      <span className='account-span'>
        Don't have an account?
      </span>
      <button className='switch-form' onClick={() => dispatch(openModal('Sign up'))}>
        Sign up
      </button>
    </div>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);