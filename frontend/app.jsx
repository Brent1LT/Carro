import React from 'react';
import Root from './components/root';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { createCar, deleteCar } from './actions/car_actions';
import { createListing, updateListing } from './actions/listing_actions';

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

  window.createListing = createListing;
  window.updateListing = updateListing;

  window.createCar = createCar;
  window.deleteCar = deleteCar;
});