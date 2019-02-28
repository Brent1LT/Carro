import React from 'react';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import {Route, Switch} from 'react-router-dom';
import Modal from "./modal/modal";
import NavBarContainer from './nav_bar_container';



const App = () => (
  <div>
    <Modal />
    <NavBarContainer />
    <h1>Turo goes here</h1>
  </div>
);

export default App;


{/* <Route path='/' component={SignupFormContainer}/>
<Route path='/' component={LoginFormContainer} /> */}
{/* <ProtectedRoute component={LoggedInNav} />
<AuthRoute component={LoggedOutNav} /> */}