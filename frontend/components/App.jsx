import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SessionModal from "./modal/session_modal";
import NavBarContainer from './nav_bar/nav_bar_container';
import ListingsFormContainer from './listing/listing_form_container';
import SplashPageContainer from './splash_page_container';




const App = () => (
  <div>
    <SessionModal />
    <NavBarContainer />
    <Route exact path='/listings/new' component={ListingsFormContainer} />
    <Route exact path='/' component={SplashPageContainer} />
    <h1>Turo goes here</h1>
  </div>
);

export default App;

