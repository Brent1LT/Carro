import React from 'react';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import {Route, Switch} from 'react-router-dom';
import Modal from "./modal/modal";

import {connect} from 'react-redux';
import { OPEN_MODAL, openModal } from '../actions/modal_actions';

const App = (props) => (
  <div>
    <Modal />
    <h1>Turo goes here</h1>
    <a href='' onClick={(e) => {e.preventDefault(); props.openModal("Signup")}} >signup</a>
  </div>
);

const mdp = dispatch => ({
  openModal: (modal) => dispatch(openModal(modal))
})

export default connect(null, mdp)(App);


{/* <Route path='/' component={SignupFormContainer}/>
<Route path='/' component={LoginFormContainer} /> */}
{/* <ProtectedRoute component={LoggedInNav} />
<AuthRoute component={LoggedOutNav} /> */}