import React from 'react';
import Root from './components/root';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { createCar, deleteCar } from './util/car_api_util';
import {fetchListings, createListing, updateListing, deleteListing, fetchListing} from './actions/listing_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser){
    let user = Object.values(window.currentUser)[0];
    const preloadedState = {
      entities: {
        users: {[user.id]: user}
      },
      session: {currentUserId: user.id}
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store}/>, root)

  window.dispatch = store.dispatch;
  window.getState = store.getState;


  window.fetchListings = fetchListings;
  window.createListing = createListing;
  window.updateListing = updateListing;
  window.deleteListing = deleteListing;
  window.fetchListing = fetchListing;

  window.createCar = createCar;
  window.deleteCar = deleteCar;
});