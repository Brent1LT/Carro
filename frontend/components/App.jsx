import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SessionModal from "./modal/session_modal";
import NavBarContainer from './nav_bar/nav_bar_container';
import ListingsFormContainer from './listing/listing_form_container';
import SplashPageContainer from './splash_page_container';
import ListingShowContainer from './listing/listing_show_container';
import UpdateListingContainer from './listing/update_listing_container';



const App = () => (
  <div>
    <SessionModal />
    <NavBarContainer />
    <Switch>
      <Route path='/listings/:listingId/edit' component={UpdateListingContainer} />
      <Route exact path='/listings/new' component={ListingsFormContainer} />
      <Route exact path ='/listings/:listingId' component={ListingShowContainer} />
    </Switch>
    <Route exact path='/' component={SplashPageContainer} />
  </div>
);

export default App;

