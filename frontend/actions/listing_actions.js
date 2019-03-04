import * as ListingApiUtil from '../util/listing_api_util';

export const RECEIVE_ALL_LISTINGS = 'RECEIVE_ALL_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const REMOVE_LISTING = 'REMOVE_LISTING';
export const RECEIVE_LISTING_ERRORS ='RECEIVE_LISTING_ERRORS';

const receiveListings = (listings) => ({
  type: RECEIVE_ALL_LISTINGS,
  listings
});

const receiveListing = (listing) => ({
  type: RECEIVE_LISTING,
  listing
});

const removeListing = (listingId) => ({
  type: REMOVE_LISTING,
  listingId
});

const receiveErrors = (errors) => ({
  type: RECEIVE_LISTING_ERRORS,
  errors
});


export const fetchListings = () => dispatch => (
  ListingApiUtil.fetchListings()
    .then(listings => dispatch(receiveListings(listings)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const fetchListing = id => dispatch => (
  ListingApiUtil.fetchListing(id)
    .then(listing => dispatch(receiveListing(listing)),
    errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const createListing = listing => dispatch => (
  ListingApiUtil.createListing(listing)
    .then(listing => dispatch(receiveListing(listing)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const updateListing = listing => dispatch => (
  ListingApiUtil.updateListing(listing)
    .then(listing => dispatch(receiveListing(listing)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const deleteListing = id => dispatch => (
  ListingApiUtil.deleteListing(id)
    .then(() => dispatch(removeListing(id)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);