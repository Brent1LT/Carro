import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/session_actions';
import SessionForm from './session_form';
import {openModal, closeModal} from '../actions/modal_actions';

const mapStateToProps = state => {
  return ({
    session: state.session,
    formType: 'Sign up',
    errors: state.errors.session
  });
};

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  otherForm: (
    <div className='switch-seperator'>
      <span className='account-span'>
        Already have an account?
      </span>
      <button className='switch-form' onClick={() => dispatch(openModal('Log in'))}>
        Log in
      </button>
    </div>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);